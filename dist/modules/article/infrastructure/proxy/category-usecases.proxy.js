"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CategoryUseCaseProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUseCaseProxyModule = void 0;
const common_1 = require("@nestjs/common");
const datasources_1 = require("../datasources");
const article_module_1 = require("../../article.module");
const category_1 = require("../../app/category");
let CategoryUseCaseProxyModule = exports.CategoryUseCaseProxyModule = CategoryUseCaseProxyModule_1 = class CategoryUseCaseProxyModule {
    static register() {
        return {
            module: CategoryUseCaseProxyModule_1,
            providers: [
                {
                    inject: [datasources_1.CategoryDatasourceOrm],
                    provide: CategoryUseCaseProxyModule_1.FIND_CATEGORIES_USECASE,
                    useFactory: (categoryRepository) => new category_1.FindCategoriesUseCase(categoryRepository)
                }
            ],
            exports: [
                CategoryUseCaseProxyModule_1.FIND_CATEGORIES_USECASE
            ]
        };
    }
};
CategoryUseCaseProxyModule.FIND_CATEGORIES_USECASE = 'findCategoriesUseCaseProxy';
exports.CategoryUseCaseProxyModule = CategoryUseCaseProxyModule = CategoryUseCaseProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => article_module_1.ArticleModule)]
    })
], CategoryUseCaseProxyModule);
//# sourceMappingURL=category-usecases.proxy.js.map