import { ScheduleUserProprierties } from "../../entities/schedulesUserProperties.entity"
import { User } from "../../entities/user.entity"

export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}

 export interface IscheduleResponse {
    schedules: ScheduleUserProprierties[]
    user: string
 }