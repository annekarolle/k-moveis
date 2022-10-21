import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/appError"
import { ICategory } from "../../interfaces/categories"

const getCategorieIDpropertiesService = async (id:string): Promise<{}>=> {

    const categoryRepository = AppDataSource.getRepository(Categories)
    const propriertesRepository = AppDataSource.getRepository(Properties)

    const category = await categoryRepository.findOneBy({
        id: id
    })
   
    if(!category){
        throw new AppError("Categories not found", 404)
    }
   
    const categoryProperties = await propriertesRepository.find({         
           where:{
            category:category
           }
    })
   

    const resposta = categoryProperties.map((item) => {
        return item             
    })
    
    const final = {
        properties: resposta,
        id: category.id,
        name: category.name,                 
    }

    
    return final
    
}

export default getCategorieIDpropertiesService