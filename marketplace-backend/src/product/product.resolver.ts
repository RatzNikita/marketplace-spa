import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {ProductService} from './product.service';
import {CreateProductInput} from './dto/create-product.input';
import {UpdateProductInput} from './dto/update-product.input';
import {CreateCategoryInput} from "./dto/create-category.input";

@Resolver('Product')
export class ProductResolver {
    constructor(private readonly productService: ProductService) {
    }

    @Mutation('createProduct')
    create(@Args('createProductInput') createProductInput: CreateProductInput) {
        return this.productService.createProduct(createProductInput);
    }

    @Query('products')
    findAllByUser(@Args('user') user: string) {
        return user
            ? this.productService.findByUser(user)
            : this.productService.findAll()
    }

    @Query('categories')
    getCategories() {
        return this.productService.findAllCategories()
    }

    @Mutation('')
    createCategory(@Args('createCategoryInput')
                       createCategoryInput: CreateCategoryInput
    ) {
        return this.productService.createCategory(createCategoryInput)
    }


    @Query('product')
    findOne(@Args('id')
                id: number
    ) {
        return this.productService.findOne(id);
    }

    @Query('productByCategory')
    findProductByCategory(@Args('category')
                              category: string
    ) {
        return this.productService.findProductByCategory(category)
    }


    @Mutation('updateProduct')
    update(@Args('updateProductInput')
               updateProductInput: UpdateProductInput
    ) {
        return this.productService.update(updateProductInput);
    }

    @Mutation('removeProduct')
    remove(@Args('id')
               id: number
    ) {
        return this.productService.remove(id);
    }
}
