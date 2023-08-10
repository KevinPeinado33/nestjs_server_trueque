import { UserEntity } from '../../infrastructure/entities'
import { RegisterDto } from '../../presentation/dtos'

export interface UserRepository {
    findById(id: string): Promise< UserEntity >
    findByUsername(userName: string): Promise< UserEntity >
    create(data: RegisterDto): Promise< UserEntity >
    save(user: UserEntity): Promise< UserEntity >
}