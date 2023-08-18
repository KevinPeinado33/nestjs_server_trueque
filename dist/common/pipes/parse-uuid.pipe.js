"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomParseUUIDPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let CustomParseUUIDPipe = exports.CustomParseUUIDPipe = class CustomParseUUIDPipe {
    transform(value, metadata) {
        const valueTransform = String(value);
        if (!(0, class_validator_1.isUUID)(valueTransform)) {
            throw new common_1.BadRequestException(`${valueTransform}, is no es un uuid.`);
        }
        return valueTransform;
    }
};
exports.CustomParseUUIDPipe = CustomParseUUIDPipe = __decorate([
    (0, common_1.Injectable)()
], CustomParseUUIDPipe);
//# sourceMappingURL=parse-uuid.pipe.js.map