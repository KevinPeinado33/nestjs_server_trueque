import { NotFoundException } from '@nestjs/common'

import { ArticleRepositoryOrm } from '../../infrastructure/repositories'
import { ArticleModel } from '../../domain/models'
import { ArticleMapper } from '../../domain/mappers'

export class FindArticlesUseCase {

    constructor(
        private articleRepository: ArticleRepositoryOrm,
    ) { }

    async run(): Promise< ArticleModel[] > {

        const articlesFound = await this.articleRepository.findAll()

        if ( articlesFound.length === 0 ) {
            throw new NotFoundException('No existen articulos aún.')
        }

        return ArticleMapper.entitiesToModels( articlesFound )

    }

}
