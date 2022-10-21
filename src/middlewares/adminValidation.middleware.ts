import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/appError'

const adminValidationMiddleWare = async(req: Request, res: Response, next: NextFunction) => {

    if(!req.user.isAdm){
        throw new AppError('User is not admin', 403)       
    }     
    
    

    next()

}


export default adminValidationMiddleWare