import { DataSource } from "typeorm"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"



export const deleteUserService = async (id: string): Promise<User | Array<string | number>> => {

    const userRepo = AppDataSource.getRepository(User)

    const findUser = await userRepo.findOneBy({
        id
    })

    if (!findUser) {
        throw new AppError('User not Found', 404)
    }
    
    if(findUser.isActive === false){
        throw new AppError('User not Found', 400)    
    }          
    
    
    await userRepo.update(
            id,
            {
                isActive: false
            }
        )
    

    const user = await userRepo.findOneBy({
        id
    })

    return user!
}