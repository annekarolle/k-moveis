import { compare } from "bcrypt"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserLogin } from "../../interfaces/users"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { AppError } from "../../errors/appError"



const createLoginService = async ({ email, password }: IUserLogin): Promise<string> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })
   
    if(!user){
        throw new AppError('Invalid user or password', 404)
    }

    if(user.isActive === false){
        throw new AppError("User is inactive", 404)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError('Invalid user or password', 403)
    }

    const token = jwt.sign({
            isAdm: user.isAdm            
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: user.id
        }
    )

    return token



}

export default createLoginService