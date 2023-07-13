import { FindAllArticleUseCase, CreateArticleUseCase, DeleteArticleUseCase } from '../../domain/usecases';
import { Article } from '../../data/entities';
import { CreateArticleDto } from '../../domain/dtos';
export declare class ArticleController {
    private findAllArticleUseCase;
    private createArticleUseCase;
    private deleteArticleUseCase;
    constructor(findAllArticleUseCase: FindAllArticleUseCase, createArticleUseCase: CreateArticleUseCase, deleteArticleUseCase: DeleteArticleUseCase);
    findAllArticles(): Promise<Article[]>;
    createArticle(payload: CreateArticleDto): Promise<Article>;
    getById(): void;
    updateArticleById(): void;
    deleteArticleById(id: string): void;
}
