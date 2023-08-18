"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./infrastructure/entities");
const datasources_1 = require("./infrastructure/datasources");
const controllers_1 = require("./presentation/controllers");
const proxy_1 = require("./infrastructure/proxy");
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            proxy_1.UserUseCaseProxyModule.register(),
            typeorm_1.TypeOrmModule.forFeature([entities_1.UserEntity, entities_1.PreferenceEntity]),
        ],
        controllers: [
            controllers_1.UserController,
            controllers_1.AuthController
        ],
        providers: [
            datasources_1.UserDatasourceOrm,
        ],
        exports: [typeorm_1.TypeOrmModule, datasources_1.UserDatasourceOrm]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map