"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapper = void 0;
const models_1 = require("../models");
class CategoryMapper {
    static entitiesToModels(entities) {
        const models = entities.map((entity) => {
            const model = new models_1.CategoryModel({
                id: entity.id,
                name: entity.title,
                description: entity.description,
                status: entity.status
            });
            return model;
        });
        return models;
    }
}
exports.CategoryMapper = CategoryMapper;
//# sourceMappingURL=category.mapper.js.map