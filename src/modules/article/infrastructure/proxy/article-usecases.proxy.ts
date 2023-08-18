import { DynamicModule, Module, forwardRef } from '@nestjs/common'

import { ArticleModule } from '../../article.module'
import { UserModule } from 'src/modules/user/user.module'
import { ArticleDatasourceOrm, CategoryDatasourceOrm } from '../datasources'
import { CreateArticleUseCase, FindArticlesUseCase, FindArticleUseCase } from '../../app/article'
import { UserDatasourceOrm } from 'src/modules/user/infrastructure/datasources'
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
                    inject: [ ArticleDatasourceOrm, CategoryDatasourceOrm, UserDatasourceOrm ],
                    provide: ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE,
                    useFactory: ( 
                        articleRepository: ArticleDatasourceOrm,
                        categoryRepository: CategoryDatasourceOrm,
                        userRepository: UserDatasourceOrm

                    ) => new CreateArticleUseCase(articleRepository, categoryRepository, userRepository)
                    
                },
                {
                    inject: [ ArticleDatasourceOrm ],
                    provide: ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE,
                    useFactory: (articleRepository: ArticleDatasourceOrm) =>
                        new FindArticlesUseCase( articleRepository )
                },
                {
                    inject: [ ArticleDatasourceOrm ],
                    provide: ArticleUseCaseProxyModule.FIND_ARTICLE_USECASE,
                    useFactory: (articleRepository: ArticleDatasourceOrm) => 
                        new FindArticleUseCase( articleRepository )
                },
                {
                    inject: [ ArticleDatasourceOrm ],
                    provide: ArticleUseCaseProxyModule.DELETE_ARTICLE_USECASE,
                    useFactory: (articleRepository: ArticleDatasourceOrm) => 
                        new DeleteArticleUseCase( articleRepository )
                },
                {
                    inject: [ ArticleDatasourceOrm ],
                    provide: ArticleUseCaseProxyModule.UPDATE_ARTICLE_USECASE,
                    useFactory: (articleRepository: ArticleDatasourceOrm) => 
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