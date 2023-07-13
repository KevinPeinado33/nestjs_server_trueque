import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Article, Category, Exchange } from './data/models'
import { CreateArticleUseCase, DeleteArticleUseCase, FindAllArticleUseCase, FindAllCategoryUseCase, FindArticleByUseCase } from './domain/usecases'
import { ArticleRepositoryImpl, CategoryRepositoryImpl } from './data/repositories'
import { ArticleRepository, CategoryRepository } from './domain/repositories'
import { ArticleController } from './presentation/controllers/article.controller'
import { CategoryController } from './presentation/controllers/category.controller'

@Module({
    imports: [ TypeOrmModule.forFeature([ Article, Category , Exchange]) ],
    controllers: [ ArticleController, CategoryController ],
    providers: [ 
        FindAllArticleUseCase, 
        CreateArticleUseCase,
        DeleteArticleUseCase,
        FindAllArticleUseCase,
        FindArticleByUseCase,
        FindAllCategoryUseCase,
        
        { provide: ArticleRepository, useClass: ArticleRepositoryImpl },
        { provide: CategoryRepository, useClass: CategoryRepositoryImpl }
    ],
    exports: [ TypeOrmModule ]
})
export class ArticleModule { }
