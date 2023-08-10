import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { IArticleRepository } from '../../domain/repositories'
import { ArticleEntity } from '../entities'
import { ArticleModel } from '../../domain/models'

@Injectable()
export class ArticleRepositoryOrm implements IArticleRepository {
    
    constructor(
        @InjectRepository( ArticleEntity )
        private articleRepository: Repository< ArticleEntity >
    ) { }

    
    async create(payload: ArticleModel): Promise<ArticleEntity> {
        return await this.articleRepository.create( payload )        
    }
    
    save(payload: ArticleEntity): Promise<ArticleEntity> {
        return this.articleRepository.save( payload )
    }
    
    findAll(): Promise<ArticleEntity[]> {
        return this.articleRepository.find()    
    }

}
