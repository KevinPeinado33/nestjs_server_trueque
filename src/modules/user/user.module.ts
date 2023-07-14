import { ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Preference, User } from './data/entities'
import { UserRepository } from './domain/repostories'
import { UserRepositoryImpl } from './data/repositories'
import { UserController } from './presentation/controllers/user.controller'
import { LoginUseCase, RegisterUseCase } from './domain/usecases'
import configuration from 'src/common/config/configuration'

@Module({
    
    imports: [ 
    
        TypeOrmModule.forFeature([ User, Preference ]),
        
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
    
    controllers: [ UserController  ],
    providers: [ 
        LoginUseCase,
        RegisterUseCase,
        /**
          * FindAllArticleUseCase, 
          * CreateArticleUseCase,
          * DeleteArticleUseCase,
          * FindAllArticleUseCase,
          * FindArticleByUseCase,
                 
          * { provide: ArticleRepository, useClass: ArticleImplRepository } 
         */    
        { provide: UserRepository, useClass: UserRepositoryImpl } 
    ],
    exports: [ TypeOrmModule, UserRepository ]
})
export class UserModule { }
