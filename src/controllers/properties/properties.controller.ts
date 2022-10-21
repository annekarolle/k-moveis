import { Request, Response } from 'express'
import listPropertyService from '../../services/properties/listProperty.service'
import propertiesCreateService from '../../services/properties/propertiesCreate.service'




export const propertiesCreateController = async (req: Request, res: Response) => {
    
        const {value, size, address, categoryId} = req.body
        const newProperties =  await propertiesCreateService({value, size, address, categoryId})      

    
        
        return res.status(201).send(newProperties)

}
                           

export const listPropertyController = async (req: Request, res: Response) => {
     
    const properties = await listPropertyService()
    return res.json(properties)
}