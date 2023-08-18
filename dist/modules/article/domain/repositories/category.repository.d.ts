import { CategoryEntity } from '../../infrastructure/entities';
export interface ICategoryRepository {
    findAll(): Promise<CategoryEntity[]>;
    findById(id: string): Promise<CategoryEntity>;
}
