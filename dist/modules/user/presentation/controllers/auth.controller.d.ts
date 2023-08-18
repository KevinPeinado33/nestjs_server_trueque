import { LoginDto } from '../dtos';
import { LoginUseCase } from '../../app/auth';
import { IResponse } from 'src/common/responses';
export declare class AuthController {
    private readonly loginUserProxy;
    constructor(loginUserProxy: LoginUseCase);
    login(payload: LoginDto): Promise<IResponse>;
}
