import { DynamicModule, Module, forwardRef } from '@nestjs/common'

import { UserModule } from '../../user.module'
import { UserDatasourceOrm } from '../datasources'
import { RegisterUserUseCase } from '../../app/user'
import { CustomJwtModule, JwtTokenService } from 'src/common/services/jwt'
import { LoginUseCase } from '../../app/auth'

@Module({
    imports: [ forwardRef(() => UserModule), CustomJwtModule ]
})
export class UserUseCaseProxyModule {

    static REGISTER_USER_USECASE = 'registerUserUseCaseProxy'
    static LOGIN_USER_USECASE    = 'loginUserUseCaseProxy'

    static register(): DynamicModule {
        return {
            module: UserUseCaseProxyModule,
            providers: [
                {
                    inject: [ UserDatasourceOrm, JwtTokenService ],
                    provide: UserUseCaseProxyModule.REGISTER_USER_USECASE,
                    useFactory: (userRepositoryOrm: UserDatasourceOrm, jwtService: JwtTokenService) => 
                        new RegisterUserUseCase(userRepositoryOrm, jwtService)
                    
                },
                {
                    inject: [ UserDatasourceOrm, JwtTokenService ],
                    provide: UserUseCaseProxyModule.LOGIN_USER_USECASE,
                    useFactory: (userRepositoryOrm: UserDatasourceOrm, jwtService: JwtTokenService) => 
                        new LoginUseCase(userRepositoryOrm, jwtService)
                }
            ],
            exports: [ 
                UserUseCaseProxyModule.REGISTER_USER_USECASE,
                UserUseCaseProxyModule.LOGIN_USER_USECASE
            ]
        }

    }

}