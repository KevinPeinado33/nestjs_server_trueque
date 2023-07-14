import { Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserRepository } from '../repostories'
import { PayloadToken } from '../../data/model'
import { LoginDto } from '../dtos'

@Injectable()
export class LoginUseCase {

    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async run ( loginUserDto: LoginDto ) {
        
        const userFound = await this.userRepository.findByUsername( loginUserDto.userName )

        if ( !userFound )
            throw new NotFoundException('Credenciales incorrectas, intente otra vez.')

        // TODO: validar si la contraseña es correcta
        
        const payload: PayloadToken = { sub: userFound.id, user: userFound.userName }

        return {
            access_token: this.jwtService.sign( payload ),
            user: userFound
        }

        
    }


}