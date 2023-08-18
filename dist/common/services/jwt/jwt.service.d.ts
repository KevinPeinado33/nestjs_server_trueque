import { JwtService } from '@nestjs/jwt';
import { IJwtService } from './jwt.interface';
export declare class JwtTokenService implements IJwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    createToken(payload: any): string;
    checkToken(token: string): Promise<any>;
}
