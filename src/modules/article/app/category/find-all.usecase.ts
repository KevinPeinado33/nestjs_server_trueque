import { NotFoundException } from '@nestjs/common'

import { CategoryModel } from '../../domain/models'
import { CategoryMapper } from '../../domain/mappers'
import { ICategoryRepository } from '../../domain/repositories'

export class FindCategoriesUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ) { }
    
    async run(): Promise< CategoryModel[] > {

        const categoriesFound = await this.categoryRepository.findAll()

        if ( categoriesFound.length === 0 ) {
            throw new NotFoundException('Todavia no hay categorias.')
        }

        return CategoryMapper.entitiesToModels( categoriesFound )

    }

}