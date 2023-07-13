import { Repository } from 'typeorm';
import { Category } from '../models';
import { CategoryRepository } from '../../domain/repositories';
export declare class CategoryRepositoryImpl implements CategoryRepository {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
}
