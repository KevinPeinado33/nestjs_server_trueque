import { Article } from '../../data/models'
import { CreateArticleDto } from '../dtos'

export abstract class ArticleRepository {
    
    abstract save(payload: CreateArticleDto) : Promise< Article >
    abstract create(payload: Article)        : Promise< Article >
    abstract findAll()                       : Promise< Article[] >

}
