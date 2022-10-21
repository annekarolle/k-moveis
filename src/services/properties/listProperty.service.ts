import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/appError"
import { ICategory } from "../../interfaces/categories"

const listPropertyService =async (): Promise <Properties[]> => {

    const propertyRepository = AppDataSource.getRepository(Properties)
    const propertiies = await propertyRepository.find()

    if(!propertiies){
        throw new AppError("Property not found", 404)
    }

    return propertiies


}

export default listPropertyService