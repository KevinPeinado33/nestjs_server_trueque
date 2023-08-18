"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const models_1 = require("../models");
class UserMapper {
    static dtoToModel(dto) {
        const model = new models_1.UserModel({
            password: dto.password,
            email: dto.email,
            phone: dto.phone,
            firstName: dto.firstName,
            lastName: dto.lastName,
            qualification: dto.qualification,
            imageProfile: dto.imageProfile,
            dateBirth: dto.dateBirth,
            status: dto.status,
            numberMaxExchanges: dto.numberMaxExchanges,
            place: dto.place
        });
        return model;
    }
    static entiyToModel(entity) {
        const model = new models_1.UserModel({
            id: entity.id,
            password: entity.password,
            email: entity.email,
            phone: entity.phone,
            firstName: entity.firstName,
            lastName: entity.lastName,
            qualification: entity.qualification,
            imageProfile: entity.imageProfile,
            dateBirth: entity.dateBirth.toISOString(),
            status: entity.status,
            numberMaxExchanges: entity.numberMaxExchanges,
            place: entity.place,
        });
        return model;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map