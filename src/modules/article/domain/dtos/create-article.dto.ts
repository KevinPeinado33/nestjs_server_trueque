import { IsString, IsNotEmpty, IsUrl, IsArray, IsDate, IsBoolean } from 'class-validator'

export class CreateArticleDto {

    @IsString()
    @IsNotEmpty()
    title: string
    
    @IsString()
    @IsNotEmpty()
    description: string
    
    @IsUrl()
    @IsArray()
    @IsNotEmpty()
    images: string[]

    @IsNotEmpty()
    @IsDate()
    publishDate: string

    @IsBoolean()
    status: boolean

}
