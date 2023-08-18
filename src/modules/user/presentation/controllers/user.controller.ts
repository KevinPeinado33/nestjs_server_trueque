import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common'

import { UserDto } from '../dtos'
import { IResponse } from 'src/common/responses'
import { RegisterUserUseCase } from '../../app/user'
import { UserUseCaseProxyModule } from '../../infrastructure/proxy'

@Controller('user')
export class UserController {
    
    constructor(

        @Inject(UserUseCaseProxyModule.REGISTER_USER_USECASE)
        private readonly createUserProxy: RegisterUserUseCase

    ) { }

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    async postCreate(
        @Body() 
        payload: UserDto
    ): Promise<IResponse> {
        
        const data = await this.createUserProxy.run( payload )

        return { msg: 'Bienvenido!', data }

    }


}