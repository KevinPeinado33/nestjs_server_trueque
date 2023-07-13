import { Repository } from 'typeorm';
import { Category } from '../entities';
import { CategoryRepository } from '../../domain/repositories';
export declare class CategoryRepositoryImpl implements CategoryRepository {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findById(id: string): Promise<Category>;
}
