import { DynamicModule } from '@nestjs/common';
export declare class ArticleUseCaseProxyModule {
    static CREATE_ARTICLE_USECASE: string;
    static FIND_ARTICLES_USECASE: string;
    static FIND_ARTICLE_USECASE: string;
    static DELETE_ARTICLE_USECASE: string;
    static UPDATE_ARTICLE_USECASE: string;
    static register(): DynamicModule;
}
