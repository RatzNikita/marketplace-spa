import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar')
    name: string

    @Column('varchar', {select: false})
    password: string
}
