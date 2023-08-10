import { Body, Controller, Post } from '@nestjs/common'

import { RegisterDto } from '../dtos'

@Controller('user')
export class UserController {
    
    constructor(
    ) { }

    @Post('register')
    regiter(@Body() registerDto: RegisterDto) {
        return 'a'
    }

}