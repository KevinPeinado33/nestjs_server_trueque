import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { User } from '../../data/entities'

@Controller('user')
export class UserController {
    
    constructor() { }

    @Post('login')
    login(@Req() req: Request) {
        
    }

}