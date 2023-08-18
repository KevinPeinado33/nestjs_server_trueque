export interface IJwtService {
    createToken(payload: any) : string
    checkToken(token: string) : Promise< any >
}