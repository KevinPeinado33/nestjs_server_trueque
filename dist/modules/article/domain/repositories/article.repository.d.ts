import { Article } from '../../data/entities';
import { CreateArticleDto } from '../dtos';
export declare abstract class ArticleRepository {
    abstract create(payload: CreateArticleDto): Promise<Article>;
    abstract save(payload: Article): Promise<Article>;
    abstract findAll(): Promise<Article[]>;
}
