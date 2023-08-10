import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'

export class RegisterDto {

    @IsString()
    @IsNotEmpty()
    userName: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Min(9)
    @Max(20)
    phone: string

    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsNumber()
    @Min(0)
    @Max(5)
    qualification: number

    @IsString()
    @IsNotEmpty()
    imageProfile: string

    @IsInt()
    @Min(18)
    @Max(100)
    age: number

    @IsBoolean()
    @IsNotEmpty()
    status: boolean

    @IsInt()
    @Min(0)
    @Max(3)
    numberMaxExchanges: number

    @IsString()
    @IsNotEmpty()
    place: string

}