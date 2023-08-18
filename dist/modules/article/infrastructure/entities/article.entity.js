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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../user/infrastructure/entities");
const _1 = require(".");
let ArticleEntity = exports.ArticleEntity = class ArticleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ArticleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '150' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '350' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'publish_date'
    }),
    __metadata("design:type", Date)
], ArticleEntity.prototype, "publishDate", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '350' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (user) => user.articles),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], ArticleEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.CategoryEntity, (category) => category.articles),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", _1.CategoryEntity)
], ArticleEntity.prototype, "category", void 0);
exports.ArticleEntity = ArticleEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'articles' })
], ArticleEntity);
//# sourceMappingURL=article.entity.js.map