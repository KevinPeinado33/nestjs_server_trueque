"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticleUseCase = void 0;
const common_1 = require("@nestjs/common");
const mappers_1 = require("../../domain/mappers");
class UpdateArticleUseCase {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async run(id, payload) {
        const articlePrepared = mappers_1.ArticleMapper.dtoToModel(payload);
        const articleFound = await this.articleRepository.preload(id, articlePrepared);
        if (!articleFound) {
            throw new common_1.NotFoundException(`No existe articulo con #${id}.`);
        }
        const articleUpdated = await this.articleRepository.save(articleFound);
        return mappers_1.ArticleMapper.entityToModel(articleUpdated);
    }
}
exports.UpdateArticleUseCase = UpdateArticleUseCase;
//# sourceMappingURL=update.usecase.js.map