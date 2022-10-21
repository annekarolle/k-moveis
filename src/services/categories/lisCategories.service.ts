import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { ICategory } from "../../interfaces/categories"

const lisCategoriesService =async (): Promise <ICategory[]> => {

    const categoryRepository = AppDataSource.getRepository(Categories)
    const categories = await categoryRepository.find()

    return categories


}

export default lisCategoriesService