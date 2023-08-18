import { FindCategoriesUseCase } from '../../app/category';
import { IResponse } from 'src/common/responses';
export declare class CategoryController {
    private readonly findCategoriesProxy;
    constructor(findCategoriesProxy: FindCategoriesUseCase);
    findAllCategory(): Promise<IResponse>;
}
