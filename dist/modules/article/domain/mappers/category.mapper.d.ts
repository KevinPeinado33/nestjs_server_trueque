import { CategoryEntity } from '../../infrastructure/entities';
import { CategoryModel } from '../models';
export declare class CategoryMapper {
    static entitiesToModels(entities: CategoryEntity[]): CategoryModel[];
}
