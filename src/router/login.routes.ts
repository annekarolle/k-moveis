import { Router } from "express";
import { createLoginController } from "../controllers/sessions/login.controller";

const loginRoutes = Router()

loginRoutes.post("", createLoginController)

export default loginRoutes