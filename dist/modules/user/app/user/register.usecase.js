"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mappers_1 = require("../../domain/mappers");
class RegisterUserUseCase {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.HASH_SALT_MAX = 10;
    }
    async run(payload) {
        try {
            const userPrepared = mappers_1.UserMapper.dtoToModel(payload);
            const newUser = await this.userRepository.create(userPrepared);
            newUser.password = await bcrypt.hash(newUser.password, this.HASH_SALT_MAX);
            const userCreated = await this.userRepository.save(newUser);
            const tokenGenerated = this.jwtService.createToken({ id: userCreated.id });
            return {
                user: mappers_1.UserMapper.entiyToModel(userCreated),
                token: tokenGenerated
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al registrarte: ${error}`);
        }
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=register.usecase.js.map