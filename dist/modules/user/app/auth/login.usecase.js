"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mappers_1 = require("../../domain/mappers");
class LoginUseCase {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async run(loginDto) {
        const userFound = await this.userRepository.findByEmail(loginDto.email);
        if (!userFound)
            throw new common_1.NotFoundException('Credenciales incorrectas.');
        const validPassword = await bcrypt.compare(loginDto.password, userFound.password);
        if (!validPassword)
            throw new common_1.BadRequestException('Contraseña incorrecta!');
        const tokenGenerated = this.jwtService.createToken({ id: userFound.id });
        return {
            user: mappers_1.UserMapper.entiyToModel(userFound),
            token: tokenGenerated
        };
    }
}
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=login.usecase.js.map