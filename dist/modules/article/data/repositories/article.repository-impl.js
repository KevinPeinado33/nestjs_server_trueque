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
exports.ArticleRepositoryImpl = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
let ArticleRepositoryImpl = exports.ArticleRepositoryImpl = class ArticleRepositoryImpl {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async create(payload) {
        try {
            return await this.articleRepository.create(payload);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al modificar.');
        }
    }
    save(payload) {
        try {
            return this.articleRepository.save(payload);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al modificar.');
        }
    }
    findAll() {
        try {
            return this.articleRepository.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al modificar.');
        }
    }
};
exports.ArticleRepositoryImpl = ArticleRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.Article)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ArticleRepositoryImpl);
//# sourceMappingURL=article.repository-impl.js.map