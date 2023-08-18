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
exports.ExchangeEntity = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
let ExchangeEntity = exports.ExchangeEntity = class ExchangeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExchangeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], ExchangeEntity.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'start_date'
    }),
    __metadata("design:type", Date)
], ExchangeEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'end_date'
    }),
    __metadata("design:type", Date)
], ExchangeEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], ExchangeEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => article_entity_1.ArticleEntity),
    (0, typeorm_1.JoinColumn)({ name: 'article_id' }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], ExchangeEntity.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => article_entity_1.ArticleEntity),
    (0, typeorm_1.JoinColumn)({ name: 'exchanged_for_id' }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], ExchangeEntity.prototype, "exchangedFor", void 0);
exports.ExchangeEntity = ExchangeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'exchanges' })
], ExchangeEntity);
//# sourceMappingURL=exchange.entity.js.map