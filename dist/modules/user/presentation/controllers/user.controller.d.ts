import { UserDto } from '../dtos';
import { IResponse } from 'src/common/responses';
import { RegisterUserUseCase } from '../../app/user';
export declare class UserController {
    private readonly createUserProxy;
    constructor(createUserProxy: RegisterUserUseCase);
    postCreate(payload: UserDto): Promise<IResponse>;
}
