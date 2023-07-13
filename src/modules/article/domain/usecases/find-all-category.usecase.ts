import { Injectable } from '@nestjs/common'

import { Category } from '../../data/models'
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