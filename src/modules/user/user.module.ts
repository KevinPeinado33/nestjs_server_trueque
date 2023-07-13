import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Preference, User } from './data/entities'
import { UserRepository } from './domain/repostories'
import { UserRepositoryImpl } from './data/repositories'
import { UserController } from './presentation/controllers/user.controller'

@Module({
    imports: [ TypeOrmModule.forFeature([ User, Preference ]) ],
    controllers: [ UserController  ],
    providers: [ 
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
