import { Category } from '../../data/entities'

export abstract class CategoryRepository {
    
    abstract findAll(): Promise< Category[] >
    abstract findById(id: string): Promise < Category >

}