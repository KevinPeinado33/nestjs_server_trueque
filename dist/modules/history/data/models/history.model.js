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
exports.History = void 0;
const models_1 = require("../../../user/data/models");
const typeorm_1 = require("typeorm");
let History = exports.History = class History {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'start_date'
    }),
    __metadata("design:type", Date)
], History.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'end_date'
    }),
    __metadata("design:type", Date)
], History.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'num_exchanged' }),
    __metadata("design:type", Number)
], History.prototype, "numExchanged", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], History.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => models_1.User, (user) => user.histories),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", String)
], History.prototype, "userId", void 0);
exports.History = History = __decorate([
    (0, typeorm_1.Entity)({ name: 'histories' })
], History);
//# sourceMappingURL=history.model.js.map