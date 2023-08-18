import { DynamicModule, Module, forwardRef } from '@nestjs/common'

import { UserModule } from '../../user.module'
import { UserRepositoryOrm } from '../repositories'
import { RegisterUserUseCase } from '../../app/user'
import { CustomJwtModule, JwtTokenService } from 'src/common/services/jwt'

@Module({
    imports: [ forwardRef(() => UserModule), CustomJwtModule ]
})
export class UserUseCaseProxyModule {

    static REGISTER_USER_USECASE = 'registerUserUseCaseProxy'

    static register(): DynamicModule {
        return {
            module: UserUseCaseProxyModule,
            providers: [
                {
                    inject: [ UserRepositoryOrm, JwtTokenService ],
                    provide: UserUseCaseProxyModule.REGISTER_USER_USECASE,
                    useFactory: (userRepositoryOrm: UserRepositoryOrm, jwtService: JwtTokenService) => 
                        new RegisterUserUseCase(userRepositoryOrm, jwtService)
                    
                }
            ],
            exports: [ 
                UserUseCaseProxyModule.REGISTER_USER_USECASE
            ]
        }

    }

}