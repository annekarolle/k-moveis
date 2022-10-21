import { Router } from "express";
import { listScheduleController, scheduleCreateController } from "../controllers/schedule/schedule.controlller";
import adminValidationMiddleWare from "../middlewares/adminValidation.middleware";
import tokenAuthValidationMiddleware from "../middlewares/tokenAuthValidation.middleware";
import listScheduleService from "../services/schedule/listSchedule.service";


const scheduleRoutes = Router()

scheduleRoutes.post("", tokenAuthValidationMiddleware, scheduleCreateController)
scheduleRoutes.get('/properties/:id', tokenAuthValidationMiddleware, adminValidationMiddleWare, listScheduleController)

export default scheduleRoutes             