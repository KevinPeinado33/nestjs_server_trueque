import { ArticleEntity } from '../../infrastructure/entities'
import { ArticleModel } from '../models'

export interface IArticleRepository {
    
    create(payload: ArticleModel)             : Promise< ArticleEntity >
    save(payload: ArticleEntity)              : Promise< ArticleEntity >
    findAll(limit: number, offset: number)    : Promise< ArticleEntity[] >
    findOneById(id: string)                   : Promise< ArticleEntity | null >
    preload(id: string, payload: ArticleModel): Promise< ArticleEntity | null >

}
