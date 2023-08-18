"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = void 0;
class ArticleModel {
    constructor({ ...values }) {
        this.id = values.id;
        this.title = values.title;
        this.description = values.description;
        this.publishDate = values.publishDate;
        this.images = values.images;
        this.condition = values.condition;
        this.status = values.status || true;
        this.type = values.type || 'normal';
        this.userId = values.userId;
        this.categoryId = values.categoryId;
        this.slug = this.generateSlug(values.slug || values.title);
    }
    generateSlug(slug) {
        const sanitizedInput = slug
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
        return sanitizedInput;
    }
}
exports.ArticleModel = ArticleModel;
//# sourceMappingURL=article.model.js.map