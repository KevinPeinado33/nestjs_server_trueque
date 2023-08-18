import { Body, Controller, Inject, Post } from '@nestjs/common'

import { LoginDto } from '../dtos'
import { LoginUseCase } from '../../app/auth'
import { UserUseCaseProxyModule } from '../../infrastructure/proxy'
import { IResponse } from 'src/common/responses'

@Controller('auth')
export class AuthController {
    
    constructor(

        @Inject(UserUseCaseProxyModule.LOGIN_USER_USECASE)
        private readonly loginUserProxy: LoginUseCase

    ) { }

    @Post('login')
    async login(
        @Body() 
        payload: LoginDto
    ): Promise< IResponse > {
        
        const data = await this.loginUserProxy.run( payload )
        
        return { msg: 'Bienvenido!', data }

    }

}