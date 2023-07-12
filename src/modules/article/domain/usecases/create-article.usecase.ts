import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Article } from '../../data/models'
import { CreateArticleDto } from '../dtos'

@Injectable()
export class CreateArticleUseCase {

    constructor(
        @InjectRepository( Article ) 
        private articleRepository: Repository< Article >
    ) { }

    run(data: CreateArticleDto) {

        const article =  this.articleRepository.create( data )

        return this.articleRepository.save( article )

    }

}
