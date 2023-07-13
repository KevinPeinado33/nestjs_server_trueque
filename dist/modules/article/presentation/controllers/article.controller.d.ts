import { FindAllArticleUseCase, CreateArticleUseCase } from '../../domain/usecases';
import { Article } from '../../data/models';
import { CreateArticleDto } from '../../domain/dtos';
export declare class ArticleController {
    private findAllArticleUseCase;
    private createArticleUseCase;
    constructor(findAllArticleUseCase: FindAllArticleUseCase, createArticleUseCase: CreateArticleUseCase);
    findAllArticles(): Promise<Article[]>;
    createArticle(payload: CreateArticleDto): Promise<Article>;
    getById(): void;
    updateArticleById(): void;
    deleteArticleById(): void;
}
