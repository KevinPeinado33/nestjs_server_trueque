import { IJwtService } from 'src/common/services/jwt';
import { IUserRepository } from '../../domain/repostories';
import { LoginDto } from '../../presentation/dtos';
export declare class LoginUseCase {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: IUserRepository, jwtService: IJwtService);
    run(loginDto: LoginDto): Promise<{
        user: import("../../domain/models").UserModel;
        token: string;
    }>;
}
