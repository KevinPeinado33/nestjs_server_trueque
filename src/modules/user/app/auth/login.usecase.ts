import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { IJwtService } from 'src/common/services/jwt'
import { IUserRepository } from '../../domain/repostories'
import { LoginDto } from '../../presentation/dtos'
import { UserMapper } from '../../domain/mappers'
export class LoginUseCase {

    constructor(
        private readonly userRepository : IUserRepository,
        private readonly jwtService     : IJwtService
    ) { }

    async run ( loginDto: LoginDto ) {

        const userFound = await this.userRepository.findByEmail( loginDto.email )

        if ( !userFound ) throw new NotFoundException('Credenciales incorrectas.')

        const validPassword = await bcrypt.compare( loginDto.password, userFound.password )

        if ( !validPassword ) throw new BadRequestException('Contraseña incorrecta!')
        
        const tokenGenerated = this.jwtService.createToken( { id: userFound.id } )
        
        return {
            user: UserMapper.entiyToModel( userFound ),
            token: tokenGenerated
        }
        
    }

}