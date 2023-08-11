import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from '../user/user.module'
import { ArticleEntity, CategoryEntity, ExchangeEntity } from './infrastructure/entities'
import { ArticleRepositoryOrm, CategoryRepositoryOrm } from './infrastructure/repositories'
import { ArticleController, CategoryController } from './presentation/controllers/'
import { ArticleUseCaseProxyModule, CategoryUseCaseProxyModule } from './infrastructure/proxy'

@Module({

    imports: [
        UserModule,
        
        CategoryUseCaseProxyModule.register(),
        ArticleUseCaseProxyModule.register(),
        TypeOrmModule.forFeature([ ArticleEntity, CategoryEntity , ExchangeEntity]) 
    ],

    controllers: [ 
        ArticleController, 
        CategoryController 
    ],

    providers: [ 
        
        ArticleRepositoryOrm,
        CategoryRepositoryOrm

    ],

    exports: [ TypeOrmModule, ArticleRepositoryOrm, CategoryRepositoryOrm ]

})
export class ArticleModule { }
