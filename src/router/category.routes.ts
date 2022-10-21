import { Router } from "express";
import { categoriesCreateController, getCategorieIDpropertiesController, listCategoriesController } from "../controllers/categories/categories.controller";
import { createLoginController } from "../controllers/sessions/login.controller";
import adminValidationMiddleWare from "../middlewares/adminValidation.middleware";
import tokenAuthValidationMiddleware from "../middlewares/tokenAuthValidation.middleware";

const categoryRoutes = Router()

categoryRoutes.post("", tokenAuthValidationMiddleware, adminValidationMiddleWare, categoriesCreateController)
categoryRoutes.get("", listCategoriesController)
categoryRoutes.get("/:id/properties", getCategorieIDpropertiesController)

export default categoryRoutes