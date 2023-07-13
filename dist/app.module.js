"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const enviroments_1 = require("./common/config/enviroments");
const configuration_1 = require("./common/config/configuration");
const article_module_1 = require("./modules/article/article.module");
const data_source_module_1 = require("./common/data-source/data-source.module");
const history_module_1 = require("./modules/history/history.module");
const user_module_1 = require("./modules/user/user.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [configuration_1.default],
                isGlobal: true
            }),
            data_source_module_1.DataSourceModule,
            article_module_1.ArticleModule,
            history_module_1.HistoryModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map