import { Repository } from 'typeorm';
import { IUserRepository } from '../../domain/repostories';
import { UserEntity } from '../entities';
import { UserModel } from '../../domain/models';
export declare class UserDatasourceOrm implements IUserRepository {
    private repository;
    constructor(repository: Repository<UserEntity>);
    findById(id: string): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    create(payload: UserModel): Promise<UserEntity>;
    save(user: UserEntity): Promise<UserEntity>;
}
