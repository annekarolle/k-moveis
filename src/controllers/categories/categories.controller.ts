import { Request, Response } from 'express'
import listUserService from '../../services/users/listUser.service'
import updateUserService from '../../services/users/updateUser.service'
import userCreateService from '../../services/users/userCreate.services'
import { User } from '../../entities/user.entity'
import { IUserUpdate } from '../../interfaces/users'
import { deleteUserService } from '../../services/users/deleteUser.service'
import categoriesCreateService from '../../services/categories/categoriesCreate.service'
import lisCategoriesService from '../../services/categories/lisCategories.service'
import getCategorieIDpropertiesService from '../../services/categories/getCategorieIDproperties.service'



export const categoriesCreateController = async (req: Request, res: Response) => {
    
        const {name} = req.body
        const newCategory =  await categoriesCreateService({name})   
        
        return res.status(201).send(newCategory)

}


export const listCategoriesController = async (req: Request, res: Response) => {
    const categories = await lisCategoriesService()
    return res.json(categories)
}


export const getCategorieIDpropertiesController = async (req: Request, res: Response) => {

    const {id} = req.params       
    
    const categories = await getCategorieIDpropertiesService(id)
    
   

    return res.json(categories)

}