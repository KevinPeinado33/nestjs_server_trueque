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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleUseCase = void 0;
const common_1 = require("@nestjs/common");
const repostories_1 = require("../../../user/domain/repostories");
const repositories_1 = require("../repositories");
let CreateArticleUseCase = exports.CreateArticleUseCase = class CreateArticleUseCase {
    constructor(articleRepository, categoryRepository, userRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }
    async run(data) {
        const newArticle = await this.articleRepository.create(data);
        if (!newArticle)
            throw new common_1.InternalServerErrorException('Hubo un error al instanciar articulo');
        const categoryFound = await this.categoryRepository.findById(data.categoryId);
        if (!categoryFound)
            throw new common_1.InternalServerErrorException(`No existe un categoria con id #. ${data.categoryId}`);
        newArticle.category = categoryFound;
        const userFound = await this.userRepository.findById(data.userId);
        if (!userFound)
            throw new common_1.InternalServerErrorException(`No existe un usuario con id #${data.userId}`);
        newArticle.user = userFound;
        return this.articleRepository.save(newArticle);
    }
};
exports.CreateArticleUseCase = CreateArticleUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.ArticleRepository,
        repositories_1.CategoryRepository,
        repostories_1.UserRepository])
], CreateArticleUseCase);
//# sourceMappingURL=create-article.usecase.js.map