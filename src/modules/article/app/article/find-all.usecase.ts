import { NotFoundException } from '@nestjs/common'

import { ArticleModel } from '../../domain/models'
import { ArticleMapper } from '../../domain/mappers'
import { PaginationDto } from '../../presentation/dtos'
import { IArticleRepository } from '../../domain/repositories'

export class FindArticlesUseCase {

    constructor(
        private readonly articleRepository: IArticleRepository,
    ) { }

    async run(query: PaginationDto): Promise< ArticleModel[] > {

        const { limit = 10, offset = 0 } = query

        const articlesFound = await this.articleRepository.findAll(limit, offset)

        if ( articlesFound.length === 0 ) {
            throw new NotFoundException(`En la pagina ${ offset }, no hay mas articulos.`)
        }

        return ArticleMapper.entitiesToModels( articlesFound )

    }

}
