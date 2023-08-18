"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserUseCaseProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCaseProxyModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("../../user.module");
const datasources_1 = require("../datasources");
const user_1 = require("../../app/user");
const jwt_1 = require("../../../../common/services/jwt");
const auth_1 = require("../../app/auth");
let UserUseCaseProxyModule = exports.UserUseCaseProxyModule = UserUseCaseProxyModule_1 = class UserUseCaseProxyModule {
    static register() {
        return {
            module: UserUseCaseProxyModule_1,
            providers: [
                {
                    inject: [datasources_1.UserDatasourceOrm, jwt_1.JwtTokenService],
                    provide: UserUseCaseProxyModule_1.REGISTER_USER_USECASE,
                    useFactory: (userRepositoryOrm, jwtService) => new user_1.RegisterUserUseCase(userRepositoryOrm, jwtService)
                },
                {
                    inject: [datasources_1.UserDatasourceOrm, jwt_1.JwtTokenService],
                    provide: UserUseCaseProxyModule_1.LOGIN_USER_USECASE,
                    useFactory: (userRepositoryOrm, jwtService) => new auth_1.LoginUseCase(userRepositoryOrm, jwtService)
                }
            ],
            exports: [
                UserUseCaseProxyModule_1.REGISTER_USER_USECASE,
                UserUseCaseProxyModule_1.LOGIN_USER_USECASE
            ]
        };
    }
};
UserUseCaseProxyModule.REGISTER_USER_USECASE = 'registerUserUseCaseProxy';
UserUseCaseProxyModule.LOGIN_USER_USECASE = 'loginUserUseCaseProxy';
exports.UserUseCaseProxyModule = UserUseCaseProxyModule = UserUseCaseProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => user_module_1.UserModule), jwt_1.CustomJwtModule]
    })
], UserUseCaseProxyModule);
//# sourceMappingURL=user-usecase.proxy.js.map