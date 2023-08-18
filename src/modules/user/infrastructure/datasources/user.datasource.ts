import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { IUserRepository } from '../../domain/repostories'
import { UserEntity } from '../entities'
import { UserModel } from '../../domain/models'

@Injectable()
export class UserDatasourceOrm implements IUserRepository {
    
    constructor(
        @InjectRepository( UserEntity )
        private repository: Repository< UserEntity >
    ) { }
    
    findById(id: string): Promise< UserEntity > {
        return this.repository.findOneBy({ id })
    }

    findByEmail(email: string): Promise< UserEntity > {
        return this.repository.findOneBy({ email })
    }

    async create(payload: UserModel): Promise<UserEntity> {
        return await this.repository.create( payload )
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return await this.repository.save( user )
    }

}
