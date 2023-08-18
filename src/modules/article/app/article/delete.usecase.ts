import { NotFoundException } from '@nestjs/common'

import { IArticleRepository } from '../../domain/repositories'

export class DeleteArticleUseCase {

    STATUS_DELETE_ARTICLE = false

    constructor(
        private readonly articleRepository: IArticleRepository
    ) { }

    async run (id: string): Promise< void > {
        
        const articleFound = await this.articleRepository.findOneById( id )

        if ( !articleFound ) {
            throw new NotFoundException(`No existe un articulo con id #${ id }`)
        }

        articleFound.status = this.STATUS_DELETE_ARTICLE

        await this.articleRepository.save( articleFound )
        
    }

}
