import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { ScheduleUserProprierties } from "../../entities/schedulesUserProperties.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IScheduleRequest } from "../../interfaces/schedules"

const scheduleCreateService = async ({userId, propertyId, date, hour} : IScheduleRequest) : Promise<ScheduleUserProprierties>=>{
    const scheduleRepo = AppDataSource.getRepository(ScheduleUserProprierties)
    const userRepo = AppDataSource.getRepository(User)
    const propertyRepo = AppDataSource.getRepository(Properties)
    const correctDate = date.replace(/\//gm, "-")

    const schedules = await scheduleRepo.findOneBy({
        date:correctDate,
        hour:hour       
    })  

    const user = await userRepo.findOneBy({
        id: userId
    })

    const property = await propertyRepo.findOneBy({
        id: propertyId
    })

    if(!property){
        throw new AppError("Property ID Not found", 404)
    }    
    
    if(schedules){
        throw new AppError("Already schedule", 400)
    }

    

    if(!user){
        throw new AppError("User ID Not found", 404)    
    }

    const horaFormatada = hour.replace(/:/gm, ".")
    
    if(parseFloat(horaFormatada) > 18.00 || parseFloat(horaFormatada) < 8.0){        
        throw new AppError("Invalid hour", 400)  
    }

    const dateFormatada = new Date(date).toString()

    if(dateFormatada.includes("Sat") || dateFormatada.includes("Sun")){       
        throw new AppError("Its not a business day", 400) 
    }   
   
    const schedule = scheduleRepo.create({
        user: user,
        property: property,
        date: date.replace(/\//gm, "-"),
        hour: hour
    })    
    
    await scheduleRepo.save(schedule)   

    return schedule

}

export default scheduleCreateService