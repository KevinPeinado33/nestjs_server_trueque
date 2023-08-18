"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArticleUseCase = void 0;
const common_1 = require("@nestjs/common");
class DeleteArticleUseCase {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
        this.STATUS_DELETE_ARTICLE = false;
    }
    async run(id) {
        const articleFound = await this.articleRepository.findOneById(id);
        if (!articleFound) {
            throw new common_1.NotFoundException(`No existe un articulo con id #${id}`);
        }
        articleFound.status = this.STATUS_DELETE_ARTICLE;
        await this.articleRepository.save(articleFound);
    }
}
exports.DeleteArticleUseCase = DeleteArticleUseCase;
//# sourceMappingURL=delete.usecase.js.map