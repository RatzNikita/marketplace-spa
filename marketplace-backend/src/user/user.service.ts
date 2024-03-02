import {Injectable} from '@nestjs/common';
import {CreateUserInput} from './dto/create-user.input';
import {UpdateUserInput} from './dto/update-user.input';
import {LoginInput} from "./user.controller";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import * as argon2 from "argon2";
import {Response} from 'express'
import * as jwt from "jsonwebtoken";
import {DEV_SECRET} from "../middlewares/auth";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    create(createUserInput: CreateUserInput) {
        return 'This action adds a new user';
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }

    async registration(input: LoginInput, res: Response) {
        if (!!input.password && !!input.username) {
            const sameUser = await this.userRepository.findOne({
                where: {
                    name: input.username
                }
            })
            if (sameUser) {
                return res.status(403).send({message: 'Login is already in use'})
            }
            const password = await argon2.hash(input.password)
            await this.userRepository.save({
                name: input.username,
                password
            })
            return res.status(201).send({message: 'Successfully created'})
        }
        return res.status(403).send({message: 'Input invalid'})
    }

    async login(inputs: LoginInput, res: Response) {
        this.userRepository.findOne({where: {name: inputs.username},select: {name: true, id: true, password: true}})
            .then(async (user) => {
                console.log(user)
                if (await argon2.verify(user.password, inputs.password)) {
                    const token = jwt.sign(user.id, DEV_SECRET)
                    return res.status(200).send({access_token: token})
                }
                throw new Error()
            })
            .catch(() =>
                 res.status(404).send({message: 'User not found'})
            )
    }
}
