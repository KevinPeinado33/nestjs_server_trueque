import { Repository } from 'typeorm';
import { IArticleRepository } from '../../domain/repositories';
import { ArticleEntity } from '../entities';
import { ArticleModel } from '../../domain/models';
export declare class ArticleDatasourceOrm implements IArticleRepository {
    private repository;
    constructor(repository: Repository<ArticleEntity>);
    create(payload: ArticleModel): Promise<ArticleEntity>;
    save(payload: ArticleEntity): Promise<ArticleEntity>;
    findAll(limit: number, offset: number): Promise<ArticleEntity[]>;
    findOneById(id: string): Promise<ArticleEntity | null>;
    preload(id: string, payload: ArticleModel): Promise<ArticleEntity | null>;
}
