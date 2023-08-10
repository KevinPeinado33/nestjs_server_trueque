import { Body, Controller, Post } from '@nestjs/common'

import { LoginDto } from '../dtos'

@Controller('auth')
export class AuthController {
    
    constructor(
    ) { }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return 'a'
    }


}