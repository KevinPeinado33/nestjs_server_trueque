import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { ICategoryRepository } from '../../domain/repositories'
import { CategoryEntity } from '../entities'

@Injectable()
export class CategoryDatasourceOrm implements ICategoryRepository {
    
    constructor(
        @InjectRepository( CategoryEntity )
        private readonly categoryRepository: Repository< CategoryEntity >
    ) { }
    
    async findAll(): Promise< CategoryEntity[] > {
        return await this.categoryRepository.find()
    }

    findById(id: string): Promise< CategoryEntity > {
        return this.categoryRepository.findOneBy({ id })
    }

}
