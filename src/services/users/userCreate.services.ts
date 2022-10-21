import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser, IUserRequest } from "../../interfaces/users"
import bcrypt from "bcrypt"
import { AppError } from "../../errors/appError"


const userCreateService = async ({name, email, password, isAdm} : IUserRequest) : Promise<IUser>=>{


    const userRepo = AppDataSource.getRepository(User)

    const emailAlteryExist = await userRepo.findOneBy({
        email:email
    })
    
    if(emailAlteryExist){
        throw new AppError("User altery exists", 400)
    }

    const data = new Date

    const users = await userRepo.find()

    const user = userRepo.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password,10),
        isAdm: isAdm,
        isActive: true
    })    

    await userRepo.save(user)

    return user

}

export default userCreateService