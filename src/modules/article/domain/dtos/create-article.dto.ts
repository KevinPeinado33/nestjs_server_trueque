import { IsString, IsNotEmpty, IsUrl, IsArray, IsDate, IsBoolean, IsNumber, Min, Max, IsUUID } from 'class-validator'

export class CreateArticleDto {

    @IsString()
    @IsNotEmpty()
    title: string
    
    @IsString()
    @IsNotEmpty()
    description: string
    
    @IsDate()
    publishDate: Date
    
    @IsUrl()
    @IsArray()
    @IsNotEmpty()
    images: string[]

    @IsBoolean()
    status: boolean

    @IsNumber()
    @Min(0)
    @Max(10.0)
    @IsNotEmpty()
    condition: number

    @IsString()
    @IsNotEmpty()
    type: string

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    userId: string

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    categoryId: string

}
