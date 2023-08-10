import { NotFoundException } from '@nestjs/common'

import { CategoryRepositoryOrm } from '../../infrastructure/repositories'
import { CategoryModel } from '../../domain/models'
import { CategoryMapper } from '../../domain/mappers'

export class FindCategoriesUseCase {

    constructor(
        private categoryRepository: CategoryRepositoryOrm
    ) { }
    
    async run(): Promise< CategoryModel[] > {

        const categoriesFound = await this.categoryRepository.findAll()

        if ( categoriesFound.length === 0 ) {
            throw new NotFoundException('Todavia no hay categorias.')
        }

        return CategoryMapper.entitiesToModels( categoriesFound )

    }

}