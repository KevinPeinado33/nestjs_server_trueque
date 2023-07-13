import { Repository } from 'typeorm';
import { CreateArticleDto } from '../../domain/dtos';
import { ArticleRepository } from '../../domain/repositories';
import { Article } from '../models';
export declare class ArticleRepositoryImpl implements ArticleRepository {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
    save(payload: CreateArticleDto): Promise<Article>;
    create(payload: Article): Promise<Article>;
    findAll(): Promise<Article[]>;
}
