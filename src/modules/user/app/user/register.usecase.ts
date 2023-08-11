import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { UserDto } from '../../presentation/dtos'
import { PayloadToken, UserModel } from '../../domain/models'
import { UserMapper } from '../../domain/mappers'
import { UserRepositoryOrm } from '../../infrastructure/repositories'

export class RegisterUserUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private readonly userRepository: UserRepositoryOrm,
        private readonly jwtService    : JwtService
    ) { }

    async run( payload: UserDto ): Promise< UserModel > {

        const userPrepared = UserMapper.dtoToModel( payload )

        const newUser = await this.userRepository.create( userPrepared )
        
        newUser.password  = await bcrypt.hash( newUser.password, this.HASH_SALT_MAX )

        const userCreated = await this.userRepository.save( newUser )   

        const payloadToken: PayloadToken = { sub: userCreated.id, user: userCreated.email }
        const tokenGenerated = this.jwtService.sign( payloadToken ) // Error aqui

        console.log({ tokenGenerated })

        return UserMapper.entiyToModelResponse( userCreated, tokenGenerated )
        
    }

}