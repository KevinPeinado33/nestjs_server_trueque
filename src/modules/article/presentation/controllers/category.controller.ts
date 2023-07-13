import { Controller, Get } from '@nestjs/common'

import { 
    FindAllCategoryUseCase
} from '../../domain/usecases'
import { Category } from '../../data/models'

@Controller('categories')
export class CategoryController {

    constructor( 
        private findAllCategoryUseCase: FindAllCategoryUseCase,
    ) { }

    @Get()
    findAllCategory(): Promise< Category[] > {
        return this.findAllCategoryUseCase.run()
    }
}
