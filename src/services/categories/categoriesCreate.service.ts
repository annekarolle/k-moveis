import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../errors/appError"
import { ICategoryRequest } from "../../interfaces/categories"

const categoriesCreateService =async ({name} : ICategoryRequest) => {

    const categoriRepo = await AppDataSource.getRepository(Categories)

    const categoryAltreadyExists = await categoriRepo.findOneBy({
        name:name
    })

    if(categoryAltreadyExists){
        throw new AppError("Category already registered")
    }

    const category = categoriRepo.create({
        name: name })    

    await categoriRepo.save(category)

    return category
    
}

export default categoriesCreateService