import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Article, Category } from './data/models'
import { CreateArticleUseCase, DeleteArticleUseCase, FindAllArticleUseCase, FindArticleByUseCase } from './domain/usecases'
import { ArticleImplRepository } from './data/repositories'
import { ArticleController } from './presentation/controllers/article.controller'
import { ArticleRepository } from './domain/repositories'

@Module({
    imports: [ TypeOrmModule.forFeature([ Article, Category ]) ],
    controllers: [ ArticleController ],
    providers: [ 
        FindAllArticleUseCase, 
        CreateArticleUseCase,
        DeleteArticleUseCase,
        FindAllArticleUseCase,
        FindArticleByUseCase,
        
        { provide: ArticleRepository, useClass: ArticleImplRepository } 
    ],
    exports: [ TypeOrmModule ]
})
export class ArticleModule { }
