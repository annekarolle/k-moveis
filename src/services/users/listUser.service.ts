import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser } from "../../interfaces/users"

const listUserService = async (): Promise<IUser[]> =>{

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const listUser = users.map((item) =>{
        return {
        id: item.id,
		name: item.name,
		email: 	item.email,
		isAdm: item.isAdm,
		isActive: item.isActive,
		createdAt: item.createdAt,
		updatedAt: item.updatedAt
        }
    })

    return listUser

}

export default listUserService