import { CategoryModel } from '../../domain/models';
import { ICategoryRepository } from '../../domain/repositories';
export declare class FindCategoriesUseCase {
    private categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    run(): Promise<CategoryModel[]>;
}
