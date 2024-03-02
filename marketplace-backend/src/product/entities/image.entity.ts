import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product.entity";


@Entity('image')
export class Image {

    @PrimaryGeneratedColumn('identity')
    id: number

    @Column('text')
    image: string

    @ManyToOne(type => Product, product => product.images)
    product: Product
}