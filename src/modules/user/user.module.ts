import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Preference, User } from './data/models'

@Module({
    imports: [ TypeOrmModule.forFeature([ User, Preference ]) ],
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
export class UserModule { }
