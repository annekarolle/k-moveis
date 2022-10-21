import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleErrorMiddleware from "./middlewares/handleErrors.middleware"
import userRoutes from "./router/user.routes"
import loginRoutes from "./router/login.routes"
import categoryRoutes from "./router/category.routes"
import proprietyRoutes from "./router/propriety.routes"
import scheduleRoutes from "./router/schedule.routes"


const app = express()
app.use(express.json())



app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/categories', categoryRoutes)
app.use('/properties', proprietyRoutes)
app.use('/schedules', scheduleRoutes)



app.use(handleErrorMiddleware)


export default app