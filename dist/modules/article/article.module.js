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
const user_module_1 = require("../user/user.module");
const entities_1 = require("./infrastructure/entities");
const datasources_1 = require("./infrastructure/datasources");
const controllers_1 = require("./presentation/controllers/");
const proxy_1 = require("./infrastructure/proxy");
let ArticleModule = exports.ArticleModule = class ArticleModule {
};
exports.ArticleModule = ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            proxy_1.CategoryUseCaseProxyModule.register(),
            proxy_1.ArticleUseCaseProxyModule.register(),
            typeorm_1.TypeOrmModule.forFeature([entities_1.ArticleEntity, entities_1.CategoryEntity, entities_1.ExchangeEntity])
        ],
        controllers: [
            controllers_1.ArticleController,
            controllers_1.CategoryController
        ],
        providers: [
            datasources_1.ArticleDatasourceOrm,
            datasources_1.CategoryDatasourceOrm
        ],
        exports: [typeorm_1.TypeOrmModule, datasources_1.ArticleDatasourceOrm, datasources_1.CategoryDatasourceOrm]
    })
], ArticleModule);
//# sourceMappingURL=article.module.js.map