import { Request, Response } from 'express'
import listUserService from '../../services/users/listUser.service'
import updateUserService from '../../services/users/updateUser.service'
import userCreateService from '../../services/users/userCreate.services'
import { User } from '../../entities/user.entity'
import { IUserUpdate } from '../../interfaces/users'
import { deleteUserService } from '../../services/users/deleteUser.service'



export const userCreateController = async (req: Request, res: Response) => {
    
        const {name, email, password, isAdm} = req.body
        const newUser =  await userCreateService({name, email, password, isAdm})
        const resposta = {
            email: newUser.email,
            name: newUser.name,
            isAdm: newUser.isAdm,
            isActive: newUser.isActive,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
            id: newUser.id
        }
        
        return res.status(201).send(resposta)

}


export const listUsersController = async (req: Request, res: Response) =>{

     const users = await listUserService()
    return res.json(users)
}


export const updateUserController = async (req: Request, res: Response) => {      
        const body: IUserUpdate = req.body
         const userIdRequest = req.user.id
        const isAdm = req.user.isAdm       
        const id: string = req.params.id

         const updateUser = await updateUserService(body, id, userIdRequest, isAdm)

        
        //  if(body.id?.toString() || body.isActive?.toString() || body.isAdm?.toString()){        

        //     return res.status(401).json({
        //         message: 'Não pode!'
        // })
        // }

        if(updateUser instanceof User){   
            
            const resposta = {
                email: updateUser.email,
                name: updateUser.name,
                isAdm: updateUser.isAdm,
                isActive: updateUser.isActive,
                createdAt: updateUser.createdAt,
                updatedAt: updateUser.updatedAt,
                id: updateUser.id
            }
            
            return res.json(resposta)
        }
         



}

export const deleteUserController = async (req: Request, res: Response) => {    
        
            const {id} = req.params

            const deleteUser = await deleteUserService(id)

            if(deleteUser instanceof User){
                return res.status(204).json({message: 'User delete with sucess'})
            } 

             return res.status(deleteUser[1] as number).json({
            message: deleteUser[0]
             })
}
            
           
        

