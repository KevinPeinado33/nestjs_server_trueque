import { DynamicModule, Module, forwardRef } from '@nestjs/common'

import { UserModule } from '../../user.module'
import { UserRepositoryOrm } from '../repositories'
import { JwtService } from '@nestjs/jwt'
import { RegisterUserUseCase } from '../../app/user'

@Module({
    imports: [ forwardRef(() => UserModule) ]
})
export class UserUseCaseProxyModule {

    static REGISTER_USER_USECASE = 'registerUserUseCaseProxy'

    static register(): DynamicModule {
        return {
            module: UserUseCaseProxyModule,
            providers: [
                {
                    inject: [ UserRepositoryOrm, JwtService ],
                    provide: UserUseCaseProxyModule.REGISTER_USER_USECASE,
                    useFactory: (userRepositoryOrm: UserRepositoryOrm, jwtService: JwtService) => 
                        new RegisterUserUseCase(userRepositoryOrm, jwtService)
                    
                }
            ],
            exports: [ 
                UserUseCaseProxyModule.REGISTER_USER_USECASE
            ]
        }

    }

}