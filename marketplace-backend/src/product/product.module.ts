import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductResolver} from './product.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./entities/product.entity";
import {Category} from "./entities/category.entity";
import {Image} from "./entities/image.entity";
import {User} from "../user/entities/user.entity";

@Module({
    providers: [ProductResolver, ProductService],
    imports: [TypeOrmModule.forFeature([Product, Category, Image, User])],
})
export class ProductModule {
}
