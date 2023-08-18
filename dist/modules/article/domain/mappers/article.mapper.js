"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleMapper = void 0;
const models_1 = require("../models");
class ArticleMapper {
    static dtoToModel(dto) {
        const model = new models_1.ArticleModel({
            title: dto.title,
            description: dto.description,
            slug: dto.slug,
            images: dto.images,
            condition: dto.condition,
            type: dto.type,
            userId: dto.userId,
            categoryId: dto.categoryId,
        });
        return model;
    }
    static entityToModel(entity) {
        const model = new models_1.ArticleModel({
            id: entity.id,
            title: entity.title,
            description: entity.description,
            publishDate: entity.publishDate,
            slug: entity.slug,
            images: entity.images,
            status: entity.status,
            condition: entity.condition,
            type: entity.type,
            userId: entity.user?.id,
            categoryId: entity.category?.id,
        });
        return model;
    }
    static entitiesToModels(entities) {
        const models = entities.map((entity) => {
            console.log({ entity });
            const model = new models_1.ArticleModel({
                id: entity.id,
                title: entity.title,
                description: entity.description,
                publishDate: entity.publishDate,
                slug: entity.slug,
                images: entity.images,
                status: entity.status,
                condition: entity.condition,
                type: entity.type,
                userId: entity.user?.id,
                categoryId: entity.category?.id,
            });
            return model;
        });
        return models;
    }
}
exports.ArticleMapper = ArticleMapper;
//# sourceMappingURL=article.mapper.js.map