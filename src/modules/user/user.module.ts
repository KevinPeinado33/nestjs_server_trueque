import { ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import configuration from 'src/config/configuration'
import { PreferenceEntity, UserEntity } from './infrastructure/entities'
import { UserRepositoryOrm } from './infrastructure/repositories'
import { AuthController, UserController } from './presentation/controllers'

@Module({
    
    imports: [ 

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
        UserRepositoryOrm
    ],
    
    exports: [ TypeOrmModule, UserRepositoryOrm ]
})
export class UserModule { }
