import { Repository } from 'typeorm'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Category } from '../models'
import { CategoryRepository } from '../../domain/repositories'

@Injectable()
export class CategoryRepositoryImpl implements CategoryRepository {
    
    constructor(
        @InjectRepository( Category )
        private categoryRepository: Repository< Category >
    ) { }
    
    findAll(): Promise< Category[] > {
        
        try {
            return this.categoryRepository.find()
        } catch( error ) {
            throw new InternalServerErrorException('Error al extraer.')
        }
    
    }

}
