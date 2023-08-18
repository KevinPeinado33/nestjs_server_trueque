import { NotFoundException } from '@nestjs/common'

import { IUserRepository } from 'src/modules/user/domain/repostories'
import { ArticleDto } from '../../presentation/dtos'
import { ArticleModel } from '../../domain/models'
import { ArticleMapper } from '../../domain/mappers'
import { IArticleRepository, ICategoryRepository } from '../../domain/repositories'

export class CreateArticleUseCase {

    constructor(
        private readonly articleRepository  : IArticleRepository,
        private readonly categoryRepository : ICategoryRepository,
        private readonly userRepository     : IUserRepository
    ) { }

    async run(payload: ArticleDto): Promise< ArticleModel > {

        const articlePrepared = ArticleMapper.dtoToModel( payload )

        const newArticle = await this.articleRepository.create( articlePrepared )

        const categoryFound = await this.categoryRepository.findById( articlePrepared.categoryId )     
        if ( !categoryFound ) {
            throw new NotFoundException(`No existe un categoria con id #. ${ articlePrepared.categoryId }.`)
        }

        newArticle.category = categoryFound

        const userFound = await this.userRepository.findById( articlePrepared.userId )
        console.log({ userFound })
        if ( !userFound ) {
            throw new NotFoundException(`No existe un usuario con id #${ articlePrepared.userId }.`)
        }
        
        newArticle.user = userFound

        const articleSaved = await this.articleRepository.save( newArticle )

        return ArticleMapper.entityToModel( articleSaved )

    }

}
