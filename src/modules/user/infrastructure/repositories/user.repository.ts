import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { IUserRepository } from '../../domain/repostories'
import { UserEntity } from '../entities'
import { UserModel } from '../../domain/models'

@Injectable()
export class UserRepositoryOrm implements IUserRepository {
    
    constructor(
        @InjectRepository( UserEntity )
        private repository: Repository< UserEntity >
    ) { }
    
    findById(id: string): Promise< UserEntity > {
        return this.repository.findOneBy({ id })
    }

    findByUsername(userName: string): Promise< UserEntity > {
        return this.repository.findOneBy({ userName })
    }

    async create(payload: UserModel): Promise<UserEntity> {
        return await this.repository.create( payload )
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return await this.repository.save( user )
    }

}
