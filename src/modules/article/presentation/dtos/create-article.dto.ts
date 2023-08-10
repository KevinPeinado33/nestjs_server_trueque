import { IsString, IsNotEmpty, IsArray, IsNumber, Min, Max, IsUUID, ArrayNotEmpty, ArrayMinSize, IsIn, IsUrl, IsOptional, IsPositive } from 'class-validator'

export class CreateArticleDto {

    @IsString()
    @IsNotEmpty()
    title: string
    
    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsOptional()
    slug?: string
    
    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsString({ each: true })
    @IsUrl({}, { each: true })
    images: string[]

    @IsPositive()
    @Min(0)
    @Max(10.0)
    @IsNumber()
    @IsNotEmpty()
    condition: number

    @IsString()
    @IsNotEmpty()
    @IsIn([ 'normal' , 'goal' ])
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
