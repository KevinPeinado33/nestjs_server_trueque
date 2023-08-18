"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
class CategoryModel {
    constructor({ ...values }) {
        this.id = values.id;
        this.name = values.name;
        this.description = values.description;
        this.status = values.status || true;
    }
}
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=category.model.js.map