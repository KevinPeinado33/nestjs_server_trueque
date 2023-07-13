import { Category } from '../../data/models'

export abstract class CategoryRepository {
    abstract findAll(): Promise< Category[] >
}