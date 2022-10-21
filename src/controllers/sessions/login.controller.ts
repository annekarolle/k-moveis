import { Request, Response } from 'express'
import createLoginService from '../../services/session/login.service'
import { IUserLogin } from '../../interfaces/users'


export const createLoginController = async (req:Request, res: Response) =>{

        const data: IUserLogin = req.body
        const token = await createLoginService(data)

        return res.json({token})        
  

}