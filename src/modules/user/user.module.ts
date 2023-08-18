import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PreferenceEntity, UserEntity } from './infrastructure/entities'
import { UserDatasourceOrm } from './infrastructure/datasources'
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
        UserDatasourceOrm,
    ],
    
    exports: [ TypeOrmModule, UserDatasourceOrm ]
})
export class UserModule { }
