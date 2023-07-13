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
const usecases_1 = require("../../domain/usecases");
const dtos_1 = require("../../domain/dtos");
let ArticleController = exports.ArticleController = class ArticleController {
    constructor(findAllArticleUseCase, createArticleUseCase, deleteArticleUseCase) {
        this.findAllArticleUseCase = findAllArticleUseCase;
        this.createArticleUseCase = createArticleUseCase;
        this.deleteArticleUseCase = deleteArticleUseCase;
    }
    findAllArticles() {
        return this.findAllArticleUseCase.run();
    }
    createArticle(payload) {
        return this.createArticleUseCase.run(payload);
    }
    getById() { }
    updateArticleById() { }
    deleteArticleById(id) {
        return this.deleteArticleUseCase.run(id);
    }
};
__decorate([
    (0, common_1.Get)('find-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAllArticles", null);
__decorate([
    (0, common_1.Post)('create-new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Get)('fin-by-id/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('update-by-id/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "updateArticleById", null);
__decorate([
    (0, common_1.Delete)('delete-by-id/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "deleteArticleById", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [usecases_1.FindAllArticleUseCase,
        usecases_1.CreateArticleUseCase,
        usecases_1.DeleteArticleUseCase])
], ArticleController);
//# sourceMappingURL=article.controller.js.map