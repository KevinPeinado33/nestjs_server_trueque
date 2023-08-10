import { Controller, Get, Inject } from '@nestjs/common'

import { FindCategoriesUseCase } from '../../app/category'
import { CategoryUseCaseProxyModule } from '../../infrastructure/proxy'
import { IResponse } from 'src/common/responses'
@Controller('category')
export class CategoryController {

    constructor( 
        @Inject(CategoryUseCaseProxyModule.FIND_CATEGORIES_USECASE)
        private readonly findCategoriesProxy: FindCategoriesUseCase
    ) { }

    @Get('find-all')
    async findAllCategory(): Promise< IResponse > {

        const data = await this.findCategoriesProxy.run()

        return { msg: 'ok', data }

    }

}
