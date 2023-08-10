import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post, Put, Query, HttpStatus } from '@nestjs/common'

import { IResponse } from 'src/common/responses'
import { CustomParseUUIDPipe } from 'src/common/pipes/parse-uuid.pipe'
import { CreateArticleUseCase, FindArticleUseCase, FindArticlesUseCase } from '../../app/article'
import { ArticleUseCaseProxyModule } from '../../infrastructure/proxy'
import { ArticleDto, PaginationDto } from '../dtos'
import { DeleteArticleUseCase } from '../../app/article/delete.usecase'
import { UpdateArticleUseCase } from '../../app/article/update.usecase'

@Controller('article')
export class ArticleController {

    constructor(
        @Inject(ArticleUseCaseProxyModule.CREATE_ARTICLE_USECASE)
        private readonly createArticleProxy: CreateArticleUseCase,

        @Inject(ArticleUseCaseProxyModule.FIND_ARTICLES_USECASE)
        private readonly findArticlesProxy: FindArticlesUseCase,

        @Inject(ArticleUseCaseProxyModule.FIND_ARTICLE_USECASE)
        private readonly findArticleProxy: FindArticleUseCase,

        @Inject(ArticleUseCaseProxyModule.DELETE_ARTICLE_USECASE)
        private readonly deleteArticleProxy: DeleteArticleUseCase,

        @Inject(ArticleUseCaseProxyModule.UPDATE_ARTICLE_USECASE)
        private readonly updateArticleProxy: UpdateArticleUseCase
    ) { }

    @Get('find-all')
    async findAllArticles(
        
        @Query()
        query: PaginationDto

    ): Promise< IResponse > {

        const data = await this.findArticlesProxy.run( query )
        
        return { msg: 'ok', data }

    }

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    async createArticle(
        
        @Body() 
        payload: ArticleDto

    ): Promise< IResponse > {
        
        const data = await this.createArticleProxy.run( payload )
        
        return { msg: 'Creado correctamente!', data }

    }

    @Get('find/:id')
    async getById(
        
        @Param('id', CustomParseUUIDPipe)
        id: string

    ): Promise< IResponse > {

        const data = await this.findArticleProxy.run( id )

        return { msg: 'ok', data }

    }

    @Put('update/:id')
    async updateArticleById(

        @Param('id', CustomParseUUIDPipe)
        id: string,
        
        @Body()
        payload: ArticleDto

    ): Promise< IResponse > {

        const data = await this.updateArticleProxy.run(id, payload)
        
        return { msg: 'ok', data }

    }

    @Delete('delete/:id')
    async deleteArticleById(
        
        @Param('id', CustomParseUUIDPipe) 
        id: string

    ): Promise< IResponse > {
        
        await this.deleteArticleProxy.run( id )

        return { msg: 'Articulo eliminado!' }

    }

}
