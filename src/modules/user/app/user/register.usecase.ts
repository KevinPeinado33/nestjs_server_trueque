import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserRepository } from '../../domain/repostories'
import { RegisterDto } from '../../presentation/dtos'
import { PayloadToken } from '../../domain/models'

@Injectable()
export class RegisterUseCase {

    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async run ( registerDto: RegisterDto ) {

        const newUser = await this.userRepository.create( registerDto )
        
        if ( !newUser )
            throw new InternalServerErrorException('No se pudo crear el usuario')
           
        // TODO: generar contrasenia con los salts necesarios
        // TODO: agregar bcrypt a la contrasenia para la proteccions
       
        const userCreated = await this.userRepository.save( newUser )
            
        const payload: PayloadToken = { sub: userCreated.id, user: userCreated.userName }

        return {
            access_token: this.jwtService.sign( payload ),
            user: userCreated
        }
        
    }

}