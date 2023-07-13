import { FindAllCategoryUseCase } from '../../domain/usecases';
import { Category } from '../../data/models';
export declare class CategoryController {
    private findAllCategoryUseCase;
    constructor(findAllCategoryUseCase: FindAllCategoryUseCase);
    findAllCategory(): Promise<Category[]>;
}
