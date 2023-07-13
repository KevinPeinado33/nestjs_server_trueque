import { Repository } from 'typeorm'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { UserRepository } from '../../domain/repostories'
import { User } from '../entities'

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

}
