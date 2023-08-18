"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindArticlesUseCase = void 0;
const common_1 = require("@nestjs/common");
const mappers_1 = require("../../domain/mappers");
class FindArticlesUseCase {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async run(query) {
        const { limit = 10, offset = 0 } = query;
        const articlesFound = await this.articleRepository.findAll(limit, offset);
        if (articlesFound.length === 0) {
            throw new common_1.NotFoundException(`En la pagina ${offset}, no hay mas articulos.`);
        }
        return mappers_1.ArticleMapper.entitiesToModels(articlesFound);
    }
}
exports.FindArticlesUseCase = FindArticlesUseCase;
//# sourceMappingURL=find-all.usecase.js.map