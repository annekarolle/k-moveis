import AppDataSource from "../../data-source"
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties"
import { Properties } from "../../entities/properties.entity"
import { Addresses } from "../../entities/addresses.entity"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../errors/appError"


const propertiesCreateService = async ({ value, size, address, categoryId }: IPropertyRequest) => {

    const propRepo = AppDataSource.getRepository(Properties)

    const addressRepo = AppDataSource.getRepository(Addresses)

    const categoryRepo = AppDataSource.getRepository(Categories)

    const addressFound = await addressRepo.findOneBy({
        zipCode: address.zipCode,
        number: address.number
    })

    if (addressFound) {
        const propriedade = await propRepo.findOneBy({
            size: size,
            address: addressFound
        })

        if (propriedade) {
            throw new AppError("Address already exists", 400)
        }

       
    }
    const zipCodeSize =  address.zipCode.length
    if (zipCodeSize !== 8) {
        throw new AppError("Invalid zipCode", 400)
    }

    const category = await categoryRepo.findOneBy({
        id: categoryId
    })

    if (!category) {
        throw new AppError("Category not found", 404)
    }
    
    const newAddress = addressRepo.create({
        district: address.district,
        zipCode: address.zipCode,
        number: address.number,
        city: address.city,
        state: address.state
    })

    const idAddress = await addressRepo.save(newAddress)


    const propriety = propRepo.create({
        value: value,
        size: size,
        address: idAddress,
        category: category,

    })

    const propertyNew = await propRepo.save(propriety)

    const retorno = {
        value: propertyNew.value,
        size: propertyNew.size,
        address: propertyNew.address,
        category: category,
        id: propertyNew.id,
        sold: propertyNew.sold,
        createdAt: propertyNew.createdAt,
        updatedAt: propertyNew.updatedAt
    }

    return retorno

}

export default propertiesCreateService