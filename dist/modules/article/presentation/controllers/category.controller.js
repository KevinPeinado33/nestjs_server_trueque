"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_1 = require("../../app/category");
const proxy_1 = require("../../infrastructure/proxy");
let CategoryController = exports.CategoryController = class CategoryController {
    constructor(findCategoriesProxy) {
        this.findCategoriesProxy = findCategoriesProxy;
    }
    async findAllCategory() {
        const data = await this.findCategoriesProxy.run();
        return { msg: 'ok', data };
    }
};
__decorate([
    (0, common_1.Get)('get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAllCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __param(0, (0, common_1.Inject)(proxy_1.CategoryUseCaseProxyModule.FIND_CATEGORIES_USECASE)),
    __metadata("design:paramtypes", [category_1.FindCategoriesUseCase])
], CategoryController);
//# sourceMappingURL=category.controller.js.map