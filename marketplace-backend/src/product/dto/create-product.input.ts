import {Category} from "../entities/category.entity";

export class CreateProductInput {
    title: string
    description?: string
    price?: number
    imagesB64?: string[]
    category: string

}
