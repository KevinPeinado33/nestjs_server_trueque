"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const parse_uuid_pipe_1 = require("../../../../common/pipes/parse-uuid.pipe");
const article_1 = require("../../app/article");
const proxy_1 = require("../../infrastructure/proxy");
const dtos_1 = require("../dtos");
const delete_usecase_1 = require("../../app/article/delete.usecase");
const update_usecase_1 = require("../../app/article/update.usecase");
let ArticleController = exports.ArticleController = class ArticleController {
    constructor(createArticleProxy, findArticlesProxy, findArticleProxy, deleteArticleProxy, updateArticleProxy) {
        this.createArticleProxy = createArticleProxy;
        this.findArticlesProxy = findArticlesProxy;
        this.findArticleProxy = findArticleProxy;
        this.deleteArticleProxy = deleteArticleProxy;
        this.updateArticleProxy = updateArticleProxy;
    }
    async findAllArticles(query) {
        const data = await this.findArticlesProxy.run(query);
        return { msg: 'ok', data };
    }
    async createArticle(payload) {
        const data = await this.createArticleProxy.run(payload);
        return { msg: 'Creado correctamente!', data };
    }
    async getById(id) {
        const data = await this.findArticleProxy.run(id);
        return { msg: 'ok', data };
    }
    async updateArticleById(id, payload) {
        const data = await this.updateArticleProxy.run(id, payload);
        return { msg: 'ok', data };
    }
    async deleteArticleById(id) {
        await this.deleteArticleProxy.run(id);
        return { msg: 'Articulo eliminado!' };
    }
};
__decorate([
    (0, common_1.Get)('find-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAllArticles", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.ArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id', parse_uuid_pipe_1.CustomParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id', parse_uuid_pipe_1.CustomParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.ArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticleById", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', parse_uuid_pipe_1.CustomParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticleById", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __param(0, (0, common_1.Inject)(proxy_1.ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE)),
    __param(1, (0, common_1.Inject)(proxy_1.ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE)),
    __param(2, (0, common_1.Inject)(proxy_1.ArticleUseCaseProxyModule.FIND_ARTICLE_USECASE)),
    __param(3, (0, common_1.Inject)(proxy_1.ArticleUseCaseProxyModule.DELETE_ARTICLE_USECASE)),
    __param(4, (0, common_1.Inject)(proxy_1.ArticleUseCaseProxyModule.UPDATE_ARTICLE_USECASE)),
    __metadata("design:paramtypes", [article_1.CreateArticleUseCase,
        article_1.FindArticlesUseCase,
        article_1.FindArticleUseCase,
        delete_usecase_1.DeleteArticleUseCase,
        update_usecase_1.UpdateArticleUseCase])
], ArticleController);
//# sourceMappingURL=article.controller.js.map