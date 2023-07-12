import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [ TypeOrmModule.forFeature([ /** Aqui van todos los modelos */ ]) ],
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
