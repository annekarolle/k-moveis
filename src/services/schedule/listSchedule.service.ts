import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { ScheduleUserProprierties } from "../../entities/schedulesUserProperties.entity"
import { AppError } from "../../errors/appError"
import { IscheduleResponse } from "../../interfaces/schedules"

const listScheduleService = async (id: string): Promise<IscheduleResponse> => {

    const scheduleRepository = AppDataSource.getRepository(ScheduleUserProprierties)

    const propertyRepository = AppDataSource.getRepository(Properties)

    const property = await propertyRepository.findOneBy({
        id: id
    })

    if (!property) {
        throw new AppError('Property not found', 404)
    }

    const scheduleProperty = await scheduleRepository.find({
        where: {
            property: {
                id: property.id
            }
        }
    })

    const idSchedule = await scheduleRepository.findOneBy({
        date: scheduleProperty[0].date,
        hour: scheduleProperty[0].hour
    })


    const findScheduleById = await scheduleRepository.findOneBy({
        id: idSchedule?.id
    })

    const usuario = await findScheduleById?.user

    if (!idSchedule || !findScheduleById || !usuario) {
        throw new AppError("Schedule not found", 404)
    }

    const scheduleResp: IscheduleResponse = {
        schedules: scheduleProperty,
        user: usuario.id
    }

    return scheduleResp



}

export default listScheduleService