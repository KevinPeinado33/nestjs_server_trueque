import { Repository } from 'typeorm'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Category } from '../entities'
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

    findById(id: string): Promise< Category > {
        try {
            return this.categoryRepository.findOneBy({ id })
        } catch ( error ) {
            throw new InternalServerErrorException('No se pudo seleccionar.')
        }
    }

}
