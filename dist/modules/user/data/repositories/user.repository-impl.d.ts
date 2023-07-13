import { Repository } from 'typeorm';
import { UserRepository } from '../../domain/repostories';
import { User } from '../entities';
export declare class UserRepositoryImpl implements UserRepository {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<User>;
}
