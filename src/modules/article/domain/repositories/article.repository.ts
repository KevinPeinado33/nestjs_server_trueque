import { ArticleEntity } from '../../infrastructure/entities'
import { ArticleModel } from '../models'

export interface IArticleRepository {
    
    create(payload: ArticleModel) : Promise< ArticleEntity >
    save(payload: ArticleEntity)  : Promise< ArticleEntity >
    findAll()                     : Promise< ArticleEntity[] >

}
