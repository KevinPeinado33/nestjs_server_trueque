import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common'

import { CreateArticleDto } from '../dtos'
import { CreateArticleUseCase, FindArticlesUseCase } from '../../app/article'
import { ArticleUseCaseProxyModule } from '../../infrastructure/proxy'
import { IResponse } from 'src/common/responses'
import { CustomParseUUIDPipe } from 'src/common/pipes/parse-uuid.pipe'

@Controller('article')
export class ArticleController {

    constructor(
        @Inject(ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE)
        private readonly createArticleProxy: CreateArticleUseCase,

        @Inject(ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE)
        private readonly findArticlesProxy: FindArticlesUseCase
    ) { }

    @Get('find-all')
    async findAllArticles(): Promise< IResponse > {

        const data = await this.findArticlesProxy.run()
        
        return { msg: 'ok', data }

    }

    @Post('create-new')
    async createArticle(
        @Body() 
        payload: CreateArticleDto
    ): Promise< IResponse > {
        
        const data = await this.createArticleProxy.run( payload )
        
        return { msg: 'Creado correctamente!', data }

    }

    @Get('fin-by-id/:id')
    getById(
        @Param('id', CustomParseUUIDPipe)
        id: string
    ) {
        return 'holaaa si pasaste la prueba'
    }

    @Put('update-by-id/:id')
    updateArticleById() { }

    @Delete('delete-by-id/:id')
    async deleteArticleById(
        @Param() 
        id: string
    ): Promise< IResponse > {
        
        // TODO: implementar la eliminacion

        return { msg: 'Articulo eliminado!' }

    }

}
