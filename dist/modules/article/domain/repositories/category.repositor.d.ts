import { Category } from '../../data/models';
export declare abstract class CategoryRepository {
    abstract findAll(): Promise<Category[]>;
}
