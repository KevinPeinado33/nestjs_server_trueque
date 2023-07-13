import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { 
    FindAllArticleUseCase, 
    CreateArticleUseCase,
    DeleteArticleUseCase
} from '../../domain/usecases'
import { Article } from '../../data/entities'
import { CreateArticleDto } from '../../domain/dtos'


@Controller('articles')
export class ArticleController {

    constructor( 
        private findAllArticleUseCase: FindAllArticleUseCase,
        private createArticleUseCase: CreateArticleUseCase,
        private deleteArticleUseCase: DeleteArticleUseCase
    ) { }

    @Get('find-all')
    findAllArticles(): Promise< Article[] > {
        return this.findAllArticleUseCase.run()
    }

    @Post('create-new')
    createArticle(
        @Body() payload: CreateArticleDto
    ): Promise< Article > {
        return this.createArticleUseCase.run(payload)
    }

    @Get('fin-by-id/:id')
    getById() { }

    @Put('update-by-id/:id')
    updateArticleById() { }

    @Delete('delete-by-id/:id')
    deleteArticleById(
        @Param() id: string
    ) {
        return this.deleteArticleUseCase.run( id )
    }

}
