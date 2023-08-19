import { ArticleEntity } from '../../infrastructure/entities'
import { ArticleDto } from '../../presentation/dtos'
import { ArticleModel } from '../models'

export class ArticleMapper {
    
    static dtoToModel(dto: ArticleDto): ArticleModel {
        
        const model = new ArticleModel({
            title: dto.title,
            description: dto.description,
            slug: dto.slug,
            images: dto.images,
            condition: dto.condition,
            type: dto.type,
            userId: dto.userId,
            categoryId: dto.categoryId,
        })

        return model
        
    }

    static entityToModel(entity: ArticleEntity): ArticleModel {
        
        const model = new ArticleModel({
            id: entity.id,
            title: entity.title,
            description: entity.description, 
            publishDate: entity.publishDate,
            slug: entity.slug,
            images: entity.images,
            status: entity.status,
            condition: entity.condition,
            type: entity.type,
            userId: entity.user?.id,
            categoryId: entity.category?.id,
        })

        return model
        
    }

    static entitiesToModels(entities: ArticleEntity[]): ArticleModel[] {
        
        const models = entities.map(( entity ) => {
        
            const model = new ArticleModel({
                id: entity.id!,
                title: entity.title,
                description: entity.description, 
                publishDate: entity.publishDate,
                slug: entity.slug,
                images: entity.images,
                status: entity.status,
                condition: entity.condition,
                type: entity.type,
                userId: entity.user?.id,
                categoryId: entity.category?.title,
            })
    
            return model

        })

        return models
        
    }

}
