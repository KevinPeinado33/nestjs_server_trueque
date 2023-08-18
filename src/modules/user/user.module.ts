import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PreferenceEntity, UserEntity } from './infrastructure/entities'
import { UserRepositoryOrm } from './infrastructure/repositories'
import { AuthController, UserController } from './presentation/controllers'
import { UserUseCaseProxyModule } from './infrastructure/proxy'

@Module({
    
    imports: [ 
        UserUseCaseProxyModule.register(),
        
        TypeOrmModule.forFeature([ UserEntity, PreferenceEntity ]),
    ],
    
    controllers: [ 
        UserController, 
        AuthController 
    ],
    
    providers: [ 
        UserRepositoryOrm,
    ],
    
    exports: [ TypeOrmModule, UserRepositoryOrm ]
})
export class UserModule { }
