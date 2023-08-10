import { DynamicModule, Module, forwardRef } from '@nestjs/common'

import { ArticleRepositoryOrm, CategoryRepositoryOrm } from '../repositories'
import { CreateArticleUseCase, FindArticlesUseCase } from '../../app/article'
import { ArticleModule } from '../../article.module'
import { UserModule } from 'src/modules/user/user.module'
import { UserRepositoryOrm } from 'src/modules/user/infrastructure/repositories'

@Module({
    imports: [ UserModule, forwardRef(() => ArticleModule) ]
})
export class ArticleUseCaseProxyModule {

    static CREATE_ARTICLE_USECASE = 'createArticleUseCaseProxy'
    static FIND_ARTICLES_USECASE = 'findAllArticlesUseCaseProxy'

    static register(): DynamicModule {
        return {
            module: ArticleUseCaseProxyModule,
            providers: [
                {
                    inject: [ ArticleRepositoryOrm, CategoryRepositoryOrm, UserRepositoryOrm ],
                    provide: ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE,
                    useFactory: ( 
                        articleRepository: ArticleRepositoryOrm,
                        categoryRepository: CategoryRepositoryOrm,
                        userRepository: UserRepositoryOrm

                    ) => new CreateArticleUseCase(articleRepository, categoryRepository, userRepository)
                    
                },
                {
                    inject: [ ArticleRepositoryOrm ],
                    provide: ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE,
                    useFactory: (articleRepository: ArticleRepositoryOrm) =>
                        new FindArticlesUseCase( articleRepository )
                }
            ],
            exports: [ 
                ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE, 
                ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE
            ]
        }

    }

}