"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCategoriesUseCase = void 0;
const common_1 = require("@nestjs/common");
const mappers_1 = require("../../domain/mappers");
class FindCategoriesUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async run() {
        const categoriesFound = await this.categoryRepository.findAll();
        if (categoriesFound.length === 0) {
            throw new common_1.NotFoundException('Todavia no hay categorias.');
        }
        return mappers_1.CategoryMapper.entitiesToModels(categoriesFound);
    }
}
exports.FindCategoriesUseCase = FindCategoriesUseCase;
//# sourceMappingURL=find-all.usecase.js.map