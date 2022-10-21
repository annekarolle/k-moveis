import { Router } from "express";
import { listPropertyController, propertiesCreateController } from "../controllers/properties/properties.controller";
import adminValidationMiddleWare from "../middlewares/adminValidation.middleware";
import tokenAuthValidationMiddleware from "../middlewares/tokenAuthValidation.middleware";


const proprietyRoutes = Router()

proprietyRoutes.post("", tokenAuthValidationMiddleware, adminValidationMiddleWare, propertiesCreateController)
proprietyRoutes.get("", listPropertyController )


export default proprietyRoutes