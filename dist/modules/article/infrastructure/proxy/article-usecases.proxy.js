"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ArticleUseCaseProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleUseCaseProxyModule = void 0;
const common_1 = require("@nestjs/common");
const article_module_1 = require("../../article.module");
const user_module_1 = require("../../../user/user.module");
const datasources_1 = require("../datasources");
const article_1 = require("../../app/article");
const datasources_2 = require("../../../user/infrastructure/datasources");
const delete_usecase_1 = require("../../app/article/delete.usecase");
const update_usecase_1 = require("../../app/article/update.usecase");
let ArticleUseCaseProxyModule = exports.ArticleUseCaseProxyModule = ArticleUseCaseProxyModule_1 = class ArticleUseCaseProxyModule {
    static register() {
        return {
            module: ArticleUseCaseProxyModule_1,
            providers: [
                {
                    inject: [datasources_1.ArticleDatasourceOrm, datasources_1.CategoryDatasourceOrm, datasources_2.UserDatasourceOrm],
                    provide: ArticleUseCaseProxyModule_1.CREATE_ARTICLE_USECASE,
                    useFactory: (articleRepository, categoryRepository, userRepository) => new article_1.CreateArticleUseCase(articleRepository, categoryRepository, userRepository)
                },
                {
                    inject: [datasources_1.ArticleDatasourceOrm],
                    provide: ArticleUseCaseProxyModule_1.FIND_ARTICLES_USECASE,
                    useFactory: (articleRepository) => new article_1.FindArticlesUseCase(articleRepository)
                },
                {
                    inject: [datasources_1.ArticleDatasourceOrm],
                    provide: ArticleUseCaseProxyModule_1.FIND_ARTICLE_USECASE,
                    useFactory: (articleRepository) => new article_1.FindArticleUseCase(articleRepository)
                },
                {
                    inject: [datasources_1.ArticleDatasourceOrm],
                    provide: ArticleUseCaseProxyModule_1.DELETE_ARTICLE_USECASE,
                    useFactory: (articleRepository) => new delete_usecase_1.DeleteArticleUseCase(articleRepository)
                },
                {
                    inject: [datasources_1.ArticleDatasourceOrm],
                    provide: ArticleUseCaseProxyModule_1.UPDATE_ARTICLE_USECASE,
                    useFactory: (articleRepository) => new update_usecase_1.UpdateArticleUseCase(articleRepository)
                },
            ],
            exports: [
                ArticleUseCaseProxyModule_1.CREATE_ARTICLE_USECASE,
                ArticleUseCaseProxyModule_1.FIND_ARTICLES_USECASE,
                ArticleUseCaseProxyModule_1.FIND_ARTICLE_USECASE,
                ArticleUseCaseProxyModule_1.DELETE_ARTICLE_USECASE,
                ArticleUseCaseProxyModule_1.UPDATE_ARTICLE_USECASE,
            ]
        };
    }
};
ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE = 'createArticleUseCaseProxy';
ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE = 'findArticlesUseCaseProxy';
ArticleUseCaseProxyModule.FIND_ARTICLE_USECASE = 'findArticleUseCaseProxy';
ArticleUseCaseProxyModule.DELETE_ARTICLE_USECASE = 'deleteArticleUseCaseProxy';
ArticleUseCaseProxyModule.UPDATE_ARTICLE_USECASE = 'updateArticleUseCaseProxy';
exports.ArticleUseCaseProxyModule = ArticleUseCaseProxyModule = ArticleUseCaseProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, (0, common_1.forwardRef)(() => article_module_1.ArticleModule)]
    })
], ArticleUseCaseProxyModule);
//# sourceMappingURL=article-usecases.proxy.js.map