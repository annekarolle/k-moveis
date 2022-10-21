import { Request, Response } from 'express'
import { ScheduleUserProprierties } from '../../entities/schedulesUserProperties.entity'
import listScheduleService from '../../services/schedule/listSchedule.service'
import scheduleCreateService from '../../services/schedule/scheduleCreate.service'


export const scheduleCreateController = async (req: Request, res: Response) => {

    const { userId, propertyId, date, hour } = req.body
    const newSchedule = await scheduleCreateService({ userId, propertyId, date, hour })


    if (newSchedule instanceof ScheduleUserProprierties) {
        return res.status(201).json({
            message: "Schedule create with sucess"
        })
    }

}


export const listScheduleController = async (req: Request, res: Response) => {

    const { id } = req.params
    const schedule = await listScheduleService(id)

    return res.json(schedule)
}
