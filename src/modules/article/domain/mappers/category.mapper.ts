import { CategoryEntity } from '../../infrastructure/entities'
import { CategoryModel } from '../models'

export class CategoryMapper {

    static entitiesToModels(entities: CategoryEntity[]): CategoryModel[] {
        
        const models = entities.map(( entity ) => {
            
            const model = new CategoryModel({
                id: entity.id,
                name: entity.title,
                description: entity.description,
                status: entity.status
            })

            return model

        })

        return models
        
    }

}
