import { Injectable, InternalServerErrorException } from '@nestjs/common'

import { UserRepository } from '../../../user/domain/repostories'

import { CreateArticleDto } from '../dtos'
import { ArticleRepository, CategoryRepository } from '../repositories'

@Injectable()
export class CreateArticleUseCase {

    constructor(
        private articleRepository: ArticleRepository,
        private categoryRepository: CategoryRepository,
        private userRepository: UserRepository
    ) { }

    async run(data: CreateArticleDto) {

        const newArticle = await this.articleRepository.create( data )
        if ( !newArticle )
            throw new InternalServerErrorException('Hubo un error al instanciar articulo')
        
        const categoryFound = await this.categoryRepository.findById( data.categoryId )
        if ( !categoryFound )
            throw new InternalServerErrorException(`No existe un categoria con id #. ${ data.categoryId }`)
        newArticle.category = categoryFound

        const userFound = await this.userRepository.findById( data.userId )
        if ( !userFound ) 
            throw new InternalServerErrorException(`No existe un usuario con id #${ data.userId }`)
        newArticle.user = userFound

        return this.articleRepository.save( newArticle )

    }

}
