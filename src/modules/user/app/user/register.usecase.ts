import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'

import { UserRepository } from '../../domain/repostories'
import { RegisterDto } from '../../presentation/dtos'
import { PayloadToken } from '../../domain/models'

@Injectable()
export class RegisterUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async run ( registerDto: RegisterDto ) {

        const newUser = await this.userRepository.create( registerDto )
        
        if ( !newUser )
            throw new InternalServerErrorException('No se pudo crear el usuario.')
        
        newUser.password = await bcrypt.hash( newUser.password, this.HASH_SALT_MAX )
               
        const userCreated = await this.userRepository.save( newUser )
            
        const payload: PayloadToken = { sub: userCreated.id, user: userCreated.userName }

        return {
            access_token: this.jwtService.sign( payload ),
            user: userCreated
        }
        
    }

}