import { Category } from '../../data/models';
import { CategoryRepository } from '../repositories';
export declare class FindAllCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    run(): Promise<Category[]>;
}
