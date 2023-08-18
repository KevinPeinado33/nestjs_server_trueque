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
exports.ArticleDatasourceOrm = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
let ArticleDatasourceOrm = exports.ArticleDatasourceOrm = class ArticleDatasourceOrm {
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        return await this.repository.create(payload);
    }
    save(payload) {
        return this.repository.save(payload);
    }
    findAll(limit, offset) {
        return this.repository.find({ take: limit, skip: offset, where: { status: true } });
    }
    findOneById(id) {
        return this.repository.findOneBy({ id });
    }
    preload(id, payload) {
        return this.repository.preload({ id, ...payload });
    }
};
exports.ArticleDatasourceOrm = ArticleDatasourceOrm = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.ArticleEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ArticleDatasourceOrm);
//# sourceMappingURL=article.datasource.js.map