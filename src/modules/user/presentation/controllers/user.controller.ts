import { Body, Controller, Post } from '@nestjs/common'

import { LoginDto, RegisterDto } from '../../domain/dtos'
import { LoginUseCase, RegisterUseCase } from '../../domain/usecases'

@Controller('user')
export class UserController {
    
    constructor(
        private loginUseCase: LoginUseCase,
        private regiterUseCase: RegisterUseCase
    ) { }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.loginUseCase.run( loginDto )
    }

    @Post('register')
    regiter(@Body() registerDto: RegisterDto) {
        return this.regiterUseCase.run( registerDto )
    }

}