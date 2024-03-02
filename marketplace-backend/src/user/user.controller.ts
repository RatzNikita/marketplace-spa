import {Body, Controller, Post, Res} from "@nestjs/common";
import {UserService} from "./user.service";
import {Response} from 'express'


export interface LoginInput {
    username: string,
    password: string
}

@Controller('')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('/registration')
    async registration(@Body() body: LoginInput, @Res() res: Response) {
        await this.userService.registration(body, res)
    }

    @Post('/login')
    async login(@Body() body: LoginInput, @Res() res: Response) {
        await this.userService.login(body, res)
    }
}