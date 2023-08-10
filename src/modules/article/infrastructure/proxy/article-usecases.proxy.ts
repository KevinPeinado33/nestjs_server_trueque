import { DynamicModule, Module, forwardRef } from '@nestjs/common'

import { ArticleModule } from '../../article.module'
import { UserModule } from 'src/modules/user/user.module'
import { ArticleRepositoryOrm, CategoryRepositoryOrm } from '../repositories'
import { CreateArticleUseCase, FindArticlesUseCase, FindArticleUseCase } from '../../app/article'
import { UserRepositoryOrm } from 'src/modules/user/infrastructure/repositories'
import { DeleteArticleUseCase } from '../../app/article/delete.usecase'
import { UpdateArticleUseCase } from '../../app/article/update.usecase'

@Module({
    imports: [ UserModule, forwardRef(() => ArticleModule) ]
})
export class ArticleUseCaseProxyModule {

    static CREATE_ARTICLE_USECASE = 'createArticleUseCaseProxy'
    static FIND_ARTICLES_USECASE  = 'findArticlesUseCaseProxy'
    static FIND_ARTICLE_USECASE   = 'findArticleUseCaseProxy'
    static DELETE_ARTICLE_USECASE = 'deleteArticleUseCaseProxy'
    static UPDATE_ARTICLE_USECASE = 'updateArticleUseCaseProxy'

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
                },
                {
                    inject: [ ArticleRepositoryOrm ],
                    provide: ArticleUseCaseProxyModule.FIND_ARTICLE_USECASE,
                    useFactory: (articleRepository: ArticleRepositoryOrm) => 
                        new FindArticleUseCase( articleRepository )
                },
                {
                    inject: [ ArticleRepositoryOrm ],
                    provide: ArticleUseCaseProxyModule.DELETE_ARTICLE_USECASE,
                    useFactory: (articleRepository: ArticleRepositoryOrm) => 
                        new DeleteArticleUseCase( articleRepository )
                },
                {
                    inject: [ ArticleRepositoryOrm ],
                    provide: ArticleUseCaseProxyModule.UPDATE_ARTICLE_USECASE,
                    useFactory: (articleRepository: ArticleRepositoryOrm) => 
                        new UpdateArticleUseCase( articleRepository )
                },
            ],
            exports: [ 
                ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE, 
                ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE,
                ArticleUseCaseProxyModule.FIND_ARTICLE_USECASE,
                ArticleUseCaseProxyModule.DELETE_ARTICLE_USECASE,
                ArticleUseCaseProxyModule.UPDATE_ARTICLE_USECASE,
            ]
        }

    }

}