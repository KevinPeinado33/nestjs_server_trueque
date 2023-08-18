import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { IJwtService } from './jwt.interface'

@Injectable()
export class JwtTokenService implements IJwtService {
    
    constructor(
        private readonly jwtService: JwtService
    ) { }

    createToken(payload: any): string {
        return this.jwtService.sign( 
            payload, 
            { 
                secret: process.env.JWT_SECRET ,
                expiresIn: '10d' 
            } 
        )
    }
    
    async checkToken(token: string): Promise<any> {
        return await this.jwtService.verifyAsync( token )
    }
    
}