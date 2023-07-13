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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const models_1 = require("../../../article/data/models");
const models_2 = require("../../../history/data/models");
let User = exports.User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'first_name', length: '150' }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'last_name', length: '150' }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], User.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'image_profile', length: '1000' }),
    __metadata("design:type", String)
], User.prototype, "imageProfile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'number_max_exchanges' }),
    __metadata("design:type", Number)
], User.prototype, "numberMaxExchanges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'place_user', length: '300' }),
    __metadata("design:type", String)
], User.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => models_1.Article, (article) => article.userId),
    __metadata("design:type", Array)
], User.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => models_2.History, (history) => history.userId),
    __metadata("design:type", Array)
], User.prototype, "histories", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
//# sourceMappingURL=user.model.js.map