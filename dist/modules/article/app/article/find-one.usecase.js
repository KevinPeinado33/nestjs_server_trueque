"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindArticleUseCase = void 0;
const common_1 = require("@nestjs/common");
const mappers_1 = require("../../domain/mappers");
class FindArticleUseCase {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async run(id) {
        const articleFound = await this.articleRepository.findOneById(id);
        if (!articleFound) {
            throw new common_1.NotFoundException(`No encontramos el articulo con id #${id}`);
        }
        return mappers_1.ArticleMapper.entityToModel(articleFound);
    }
}
exports.FindArticleUseCase = FindArticleUseCase;
//# sourceMappingURL=find-one.usecase.js.map