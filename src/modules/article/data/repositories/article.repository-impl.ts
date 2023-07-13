import { Repository } from 'typeorm'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateArticleDto } from '../../domain/dtos'
import { ArticleRepository } from '../../domain/repositories'
import { Article } from '../entities'

@Injectable()
export class ArticleRepositoryImpl implements ArticleRepository {
    
    constructor(
        @InjectRepository( Article )
        private articleRepository: Repository< Article >
    ) { }

    
    async create(payload: CreateArticleDto): Promise<Article> {
        
        try {
            return await this.articleRepository.create( payload )
        } catch( error ) {
            throw new InternalServerErrorException('Error al modificar.')
        }
        
    }
    
    save(payload: Article): Promise<Article> {
        
        try {
            return this.articleRepository.save( payload )
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
