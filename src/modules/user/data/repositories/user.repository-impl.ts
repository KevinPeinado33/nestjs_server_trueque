import { Repository } from 'typeorm'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { UserRepository } from '../../domain/repostories'
import { User } from '../entities'
import { RegisterDto } from '../../domain/dtos'

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    
    constructor(
        @InjectRepository( User )
        private userRepository: Repository< User >
    ) { }
    
    findById(id: string): Promise< User > {
        try {
            return this.userRepository.findOneBy({ id })
        } catch ( error ) {
            throw new InternalServerErrorException('No se pudo seleccionar.')
        }
    }

    findByUsername(userName: string): Promise< User > {
        try {  
            return this.userRepository.findOneBy({ userName })
        } catch ( error ) {
            throw new InternalServerErrorException('No se pudo seleccionar.')
        }
    }

    async create(data: RegisterDto): Promise<User> {
        try {
            return await this.userRepository.create( data )
        } catch (error) {
            throw new InternalServerErrorException('No se pudo insertar.')
        }
    }

    async save(user: User): Promise<User> {
        try {
            return await this.userRepository.save( user )
        } catch (error) {
            throw new InternalServerErrorException('No se pudo crear.')
        }
    }

}
