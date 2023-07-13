import { Injectable } from '@nestjs/common'

import { Category } from '../../data/entities'
import { CategoryRepository } from '../repositories'

@Injectable()
export class FindAllCategoryUseCase {

    constructor(
        private categoryRepository: CategoryRepository
    ) { }

    run(): Promise< Category[] > {
        return this.categoryRepository.findAll()
    }
    
}