"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pg_1 = require("pg");
const configuration_1 = require("../configuration");
let DataSourceModule = exports.DataSourceModule = class DataSourceModule {
};
exports.DataSourceModule = DataSourceModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [configuration_1.default.KEY],
                useFactory: (configService) => {
                    const { user, host, dbName, password, port } = configService.postgres;
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username: user,
                        password,
                        database: dbName,
                        synchronize: true,
                        autoLoadEntities: true
                    };
                }
            })
        ],
        providers: [{
                provide: 'PG',
                useFactory: (configService) => {
                    const { user, host, dbName, password, port } = configService.postgres;
                    const clientDB = new pg_1.Client({
                        user,
                        host,
                        database: dbName,
                        password,
                        port
                    });
                    clientDB.connect();
                    return clientDB;
                },
                inject: [configuration_1.default.KEY]
            }],
        exports: ['PG', typeorm_1.TypeOrmModule]
    })
], DataSourceModule);
//# sourceMappingURL=data-source.module.js.map