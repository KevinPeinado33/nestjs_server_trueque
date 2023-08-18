import { IJwtService } from 'src/common/services/jwt';
import { UserDto } from '../../presentation/dtos';
import { IUserRepository } from '../../domain/repostories';
export declare class RegisterUserUseCase {
    private readonly userRepository;
    private readonly jwtService;
    private HASH_SALT_MAX;
    constructor(userRepository: IUserRepository, jwtService: IJwtService);
    run(payload: UserDto): Promise<{
        user: import("../../domain/models").UserModel;
        token: string;
    }>;
}
