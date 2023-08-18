import { Repository } from 'typeorm';
import { ICategoryRepository } from '../../domain/repositories';
import { CategoryEntity } from '../entities';
export declare class CategoryDatasourceOrm implements ICategoryRepository {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    findAll(): Promise<CategoryEntity[]>;
    findById(id: string): Promise<CategoryEntity>;
}
