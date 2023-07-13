import { Injectable } from '@nestjs/common'

import { Article } from '../../data/entities'
import { ArticleRepository } from '../repositories'

@Injectable()
export class FindAllArticleUseCase {

    constructor(
        private articleRepository: ArticleRepository
    ) { }

    run(): Promise< Article[] > {
        return this.articleRepository.findAll()
    }
    
}