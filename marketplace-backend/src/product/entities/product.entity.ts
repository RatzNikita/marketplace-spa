import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category.entity";
import {User} from "src/user/entities/user.entity";
import {JoinTable} from "typeorm/browser";
import {Image} from "./image.entity";

@Entity('product')
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn('identity')
    id: number

    @Column('varchar')
    title: string

    @Column('varchar', {nullable: true})
    description: string

    @Column('integer', {nullable: true})
    price: number

    @Column('integer', {nullable: true})
    rating: number

    @Column('varchar',{default: 'active'})
    status: 'active' | 'sold' | 'closed'

    @ManyToOne(type => Category, (category) => category.name)
    category: Category

    @ManyToOne(type => User,(user) => user.id)
    owner: User

    @OneToMany(type => Image, image => image.product)
    images: Image[]
}
