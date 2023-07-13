import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DetailHistory, History } from './data/entities'

@Module({
    imports: [ TypeOrmModule.forFeature([ History, DetailHistory ]) ],
    controllers: [  ],
    providers: [ 
        /**
          * FindAllArticleUseCase, 
          * CreateArticleUseCase,
          * DeleteArticleUseCase,
          * FindAllArticleUseCase,
          * FindArticleByUseCase,
                 
          * { provide: ArticleRepository, useClass: ArticleImplRepository } 
         */    
    ],
    exports: [ TypeOrmModule ]
})
export class HistoryModule { }
