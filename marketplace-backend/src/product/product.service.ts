import {Injectable} from '@nestjs/common';
import {CreateProductInput} from './dto/create-product.input';
import {UpdateProductInput} from './dto/update-product.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "./entities/product.entity";
import {Repository} from "typeorm";
import {Category} from "./entities/category.entity";
import {CreateCategoryInput} from "./dto/create-category.input";
import {Image} from "./entities/image.entity";
import {User} from "../user/entities/user.entity";

const DEFAULT_USER = '6779fab5-0fc0-4fec-9ff7-06050ec99087'

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    async createProduct(input: CreateProductInput) {
        const newProduct = new Product();
        newProduct.owner = await this.userRepository.findOne({
            where: {
                id: DEFAULT_USER,
            }
        })
        newProduct.description = input.description
        newProduct.category = await this.categoryRepository
            .findOne({
                where: {
                    name: input.category
                }
            })
        newProduct.price = input.price
        newProduct.title = input.title
        const product =  await this.productRepository.save(newProduct)
        input.imagesB64.forEach(image => {
            const i = new Image()
            i.image = image
            i.product = product
            this.imageRepository.save(i)
        })
        return product
    }

    async findAll() {
        const product =  await this.productRepository.find({
            relations: {
                category: true,
                images: true,
                owner: true,
            }
        })
        // console.log(product)
        return product
    }

    async findOne(id: number) {
        return this.productRepository.findOne({where: {id}})
    }

    async update(updateProductInput: UpdateProductInput) {
        const product = await this.productRepository.findOne({where: {id: updateProductInput.id}})
        for (const prop in updateProductInput) {
            product[prop] = updateProductInput[prop]
        }
        return this.productRepository.save(product)
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }

    createCategory(input: CreateCategoryInput) {
        return this.categoryRepository.save(input)
    }

    findAllCategories() {
        return this.categoryRepository.find()
    }

    findProductByCategory(category: string) {
        console.log(category)
        return this.productRepository.find({
            where: {
                category: {
                    name: category
                }
            }
        })
    }

    findByUser(userId: string) {
        return this.productRepository.find({
            where: {
                owner: {
                    id: userId
                }
            },
            relations: {
                category: true,
                images: true,
            }
        })
    }
}
