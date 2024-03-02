import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";


@Entity('category')
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn('identity')
    id: number
    
    @Column('varchar', {unique: true,})
    name: string
}