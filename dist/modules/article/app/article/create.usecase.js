"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleUseCase = void 0;
const common_1 = require("@nestjs/common");
const mappers_1 = require("../../domain/mappers");
class CreateArticleUseCase {
    constructor(articleRepository, categoryRepository, userRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }
    async run(payload) {
        const articlePrepared = mappers_1.ArticleMapper.dtoToModel(payload);
        const newArticle = await this.articleRepository.create(articlePrepared);
        const categoryFound = await this.categoryRepository.findById(articlePrepared.categoryId);
        if (!categoryFound) {
            throw new common_1.NotFoundException(`No existe un categoria con id #. ${articlePrepared.categoryId}.`);
        }
        newArticle.category = categoryFound;
        const userFound = await this.userRepository.findById(articlePrepared.userId);
        console.log({ userFound });
        if (!userFound) {
            throw new common_1.NotFoundException(`No existe un usuario con id #${articlePrepared.userId}.`);
        }
        newArticle.user = userFound;
        const articleSaved = await this.articleRepository.save(newArticle);
        return mappers_1.ArticleMapper.entityToModel(articleSaved);
    }
}
exports.CreateArticleUseCase = CreateArticleUseCase;
//# sourceMappingURL=create.usecase.js.map