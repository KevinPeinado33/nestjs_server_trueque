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
        private repository: Repository< ArticleEntity >
    ) { }
        
    async create(payload: ArticleModel): Promise<ArticleEntity> {
        return await this.repository.create( payload )        
    }
    
    save(payload: ArticleEntity): Promise<ArticleEntity> {
        return this.repository.save( payload )
    }
    
    findAll(limit: number, offset: number): Promise<ArticleEntity[]> {
        return this.repository.find({ take: limit, skip: offset, where: { status: true } })
    }

    findOneById(id: string): Promise<ArticleEntity | null> {
        return this.repository.findOneBy({ id })
    }

    preload(id: string, payload: ArticleModel): Promise<ArticleEntity | null> {
        return this.repository.preload({ id, ...payload })
    }

}
