"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./data/entities");
const usecases_1 = require("./domain/usecases");
const repositories_1 = require("./data/repositories");
const repositories_2 = require("./domain/repositories");
const article_controller_1 = require("./presentation/controllers/article.controller");
const category_controller_1 = require("./presentation/controllers/category.controller");
const user_module_1 = require("../user/user.module");
let ArticleModule = exports.ArticleModule = class ArticleModule {
};
exports.ArticleModule = ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([entities_1.Article, entities_1.Category, entities_1.Exchange])
        ],
        controllers: [article_controller_1.ArticleController, category_controller_1.CategoryController],
        providers: [
            usecases_1.FindAllArticleUseCase,
            usecases_1.CreateArticleUseCase,
            usecases_1.DeleteArticleUseCase,
            usecases_1.FindAllArticleUseCase,
            usecases_1.FindArticleByUseCase,
            usecases_1.FindAllCategoryUseCase,
            { provide: repositories_2.ArticleRepository, useClass: repositories_1.ArticleRepositoryImpl },
            { provide: repositories_2.CategoryRepository, useClass: repositories_1.CategoryRepositoryImpl }
        ],
        exports: [typeorm_1.TypeOrmModule]
    })
], ArticleModule);
//# sourceMappingURL=article.module.js.map