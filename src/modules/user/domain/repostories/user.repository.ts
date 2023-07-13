import { User } from '../../data/entities'

export abstract class UserRepository {
    abstract findById(id: string): Promise< User >
}