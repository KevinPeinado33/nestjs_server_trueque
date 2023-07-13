import { User } from '../../data/entities';
export declare abstract class UserRepository {
    abstract findById(id: string): Promise<User>;
}
