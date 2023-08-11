import { ConfigType } from '@nestjs/config'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import configuration from 'src/config/configuration'
import { PreferenceEntity, UserEntity } from './infrastructure/entities'
import { UserRepositoryOrm } from './infrastructure/repositories'
import { AuthController, UserController } from './presentation/controllers'
import { UserUseCaseProxyModule } from './infrastructure/proxy'

@Module({
    
    imports: [ 

        UserUseCaseProxyModule.register(),
        
        TypeOrmModule.forFeature([ UserEntity, PreferenceEntity ]),
        
        JwtModule.registerAsync({
            
            inject: [configuration.KEY],

            useFactory: (configService: ConfigType< typeof configuration >) => {
                return {
                    secret: configService.jwtSecret,
                    signOptions: {
                        expiresIn: '10d'
                    }
                }
            }
            
        })
    
    ],
    
    controllers: [ 
        UserController, 
        AuthController 
    ],
    
    providers: [ 
        UserRepositoryOrm,
        JwtService
    ],
    
    exports: [ TypeOrmModule, UserRepositoryOrm, JwtService ]
})
export class UserModule { }
