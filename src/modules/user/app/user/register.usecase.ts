import { InternalServerErrorException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { IJwtService } from 'src/common/services/jwt'
import { UserDto } from '../../presentation/dtos'
import { UserModel } from '../../domain/models'
import { UserMapper } from '../../domain/mappers'
import { IUserRepository } from '../../domain/repostories'

export class RegisterUserUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private readonly userRepository : IUserRepository,
        private readonly jwtService     : IJwtService
    ) { }

    async run( payload: UserDto ): Promise< UserModel > {

        try {

            const userPrepared = UserMapper.dtoToModel( payload )

            const newUser = await this.userRepository.create( userPrepared )
            
            newUser.password  = await bcrypt.hash( newUser.password, this.HASH_SALT_MAX )

            const userCreated = await this.userRepository.save( newUser )   
                        
            const tokenGenerated = this.jwtService.createToken( { id: userCreated.id } )
            
            return UserMapper.entiyToModelResponse( userCreated, tokenGenerated )
            
        } catch( error ) {

            throw new InternalServerErrorException(`Error al registrarte: ${ error }`)
        
        }
        
    }
    
}