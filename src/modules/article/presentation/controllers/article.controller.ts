import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common'

import { 
    FindAllArticleUseCase, 
    CreateArticleUseCase 
} from '../../domain/usecases'
import { Article } from '../../data/models'
import { CreateArticleDto } from '../../domain/dtos'

@Controller('articles')
export class ArticleController {

    constructor( 
        private findAllArticleUseCase: FindAllArticleUseCase,
        private createArticleUseCase: CreateArticleUseCase
    ) { }

    @Get()
    findAllArticles(): Promise< Article[] > {
        return this.findAllArticleUseCase.run()
    }

    @Post()
    createArticle(
        @Body() payload: CreateArticleDto
    ): Promise< Article > {
        return this.createArticleUseCase.run(payload)
    }

    @Get(':id')
    getById() { }

    @Put(':id')
    updateArticleById() { }

    @Delete(':id')
    deleteArticleById() { }

}
