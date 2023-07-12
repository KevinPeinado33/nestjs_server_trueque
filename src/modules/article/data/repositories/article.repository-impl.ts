import { Repository } from 'typeorm'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateArticleDto } from '../../domain/dtos'
import { ArticleRepository } from '../../domain/repositories'
import { Article } from '../models'

@Injectable()
export class ArticleImplRepository implements ArticleRepository {
    
    constructor(
        @InjectRepository( Article )
        private articleRepository: Repository< Article >
    ) { }

    save(payload: CreateArticleDto): Promise<Article> {
        
        try {
            return this.articleRepository.save( payload )
        } catch( error ) {
            throw new InternalServerErrorException('Error al modificar.')
        }

    }
    
    async create(payload: Article): Promise<Article> {
        
        try {
            return await this.articleRepository.create(payload)
        } catch( error ) {
            throw new InternalServerErrorException('Error al modificar.')
        }
    
    }
    
    findAll(): Promise<Article[]> {
        
        try {
            return this.articleRepository.find()
        } catch( error ) {
            throw new InternalServerErrorException('Error al modificar.')
        }
    
    }

}
