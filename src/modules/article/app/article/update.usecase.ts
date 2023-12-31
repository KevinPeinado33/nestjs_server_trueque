import { NotFoundException } from '@nestjs/common'

import { ArticleModel } from '../../domain/models'
import { ArticleDto } from '../../presentation/dtos'
import { ArticleMapper } from '../../domain/mappers'
import { IArticleRepository } from '../../domain/repositories'

export class UpdateArticleUseCase {
    
    constructor(
        private readonly articleRepository: IArticleRepository
    ) { }

    async run (id: string, payload: ArticleDto): Promise< ArticleModel > {
        
        const articlePrepared = ArticleMapper.dtoToModel( payload )
        
        const articleFound = await this.articleRepository.preload( id, articlePrepared )

        if ( !articleFound ) {
            throw new NotFoundException(`No existe articulo con #${ id }.`)
        }

        const articleUpdated = await this.articleRepository.save( articleFound )
        
        return ArticleMapper.entityToModel( articleUpdated )

    }
    
}