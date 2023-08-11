import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Length, Max, Min } from 'class-validator'

export class UserDto {

    @IsString()
    @IsNotEmpty()
    userName: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(9, 20)
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
    @IsUrl()
    @IsNotEmpty()
    imageProfile: string

    @IsString()
    @IsNotEmpty()
    age: string

    @IsBoolean()
    @IsOptional()
    status?: boolean

    @IsInt()
    @Min(0)
    @Max(3)
    @IsOptional()
    numberMaxExchanges?: number

    @IsString()
    @IsNotEmpty()
    place: string

}