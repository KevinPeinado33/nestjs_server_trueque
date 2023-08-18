import { UserEntity } from '../../infrastructure/entities';
import { UserDto } from '../../presentation/dtos';
import { UserModel } from '../models';
export declare class UserMapper {
    static dtoToModel(dto: UserDto): UserModel;
    static entiyToModel(entity: UserEntity): UserModel;
}
