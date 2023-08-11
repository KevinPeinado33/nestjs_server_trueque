import { UserEntity } from '../../infrastructure/entities'
import { UserModel } from '../models'

export interface IUserRepository {
    findById(id: string)            : Promise< UserEntity >
    findByUsername(userName: string): Promise< UserEntity >
    create(data: UserModel)         : Promise< UserEntity >
    save(user: UserEntity)          : Promise< UserEntity >
}