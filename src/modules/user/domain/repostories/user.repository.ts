import { User } from '../../data/entities'
import { RegisterDto } from '../dtos/register.dto';

export abstract class UserRepository {
    abstract findById(id: string): Promise< User >
    abstract findByUsername(userName: string): Promise< User >
    abstract create(data: RegisterDto): Promise< User >
    abstract save(user: User): Promise< User >
}