import { Repository } from 'typeorm';
import { CreateArticleDto } from '../../domain/dtos';
import { ArticleRepository } from '../../domain/repositories';
import { Article } from '../entities';
export declare class ArticleRepositoryImpl implements ArticleRepository {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
    create(payload: CreateArticleDto): Promise<Article>;
    save(payload: Article): Promise<Article>;
    findAll(): Promise<Article[]>;
}
