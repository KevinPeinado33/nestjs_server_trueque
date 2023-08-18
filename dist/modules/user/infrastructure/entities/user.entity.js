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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../article/infrastructure/entities");
let UserEntity = exports.UserEntity = class UserEntity {
    checkFields() {
        this.status = true;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '100', unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '600' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'phone_number', length: '20', unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'first_name', length: '150' }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'last_name', length: '150' }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'image_profile', length: '1000' }),
    __metadata("design:type", String)
], UserEntity.prototype, "imageProfile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', name: 'date_birth' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "dateBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '3' }),
    __metadata("design:type", String)
], UserEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'number_max_exchanges' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "numberMaxExchanges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'place_user', length: '350' }),
    __metadata("design:type", String)
], UserEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.ArticleEntity, (article) => article.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "checkFields", null);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UserEntity);
//# sourceMappingURL=user.entity.js.map