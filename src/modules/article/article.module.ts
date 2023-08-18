import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from '../user/user.module'
import { ArticleEntity, CategoryEntity, ExchangeEntity } from './infrastructure/entities'
import { ArticleDatasourceOrm, CategoryDatasourceOrm } from './infrastructure/datasources'
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
        
        ArticleDatasourceOrm,
        CategoryDatasourceOrm

    ],

    exports: [ TypeOrmModule, ArticleDatasourceOrm, CategoryDatasourceOrm ]

})
export class ArticleModule { }
