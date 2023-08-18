import { NotFoundException } from '@nestjs/common'

import { ArticleModel } from '../../domain/models'
import { ArticleMapper } from '../../domain/mappers'
import { IArticleRepository } from '../../domain/repositories'
export class FindArticleUseCase {

    constructor(
        private readonly articleRepository: IArticleRepository
    ){ }

    async run (id: string): Promise< ArticleModel > {
        
        const articleFound = await this.articleRepository.findOneById( id )

        if ( !articleFound ) {
            throw new NotFoundException(`No encontramos el articulo con id #${ id }`)
        }

        return ArticleMapper.entityToModel( articleFound )
        
    }

}