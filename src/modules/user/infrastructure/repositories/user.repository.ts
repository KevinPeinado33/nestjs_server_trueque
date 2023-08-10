import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { UserRepository } from '../../domain/repostories'
import { UserEntity } from '../entities'
import { RegisterDto } from '../../presentation/dtos'

@Injectable()
export class UserRepositoryOrm implements UserRepository {
    
    constructor(
        @InjectRepository( UserEntity )
        private userRepository: Repository< UserEntity >
    ) { }
    
    findById(id: string): Promise< UserEntity > {
        return this.userRepository.findOneBy({ id })
    }

    findByUsername(userName: string): Promise< UserEntity > {
        return this.userRepository.findOneBy({ userName })
    }

    async create(data: RegisterDto): Promise<UserEntity> {
        return await this.userRepository.create( data )
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save( user )
    }

}
