import { IResponse } from 'src/common/responses';
import { CreateArticleUseCase, FindArticleUseCase, FindArticlesUseCase } from '../../app/article';
import { ArticleDto, PaginationDto } from '../dtos';
import { DeleteArticleUseCase } from '../../app/article/delete.usecase';
import { UpdateArticleUseCase } from '../../app/article/update.usecase';
export declare class ArticleController {
    private readonly createArticleProxy;
    private readonly findArticlesProxy;
    private readonly findArticleProxy;
    private readonly deleteArticleProxy;
    private readonly updateArticleProxy;
    constructor(createArticleProxy: CreateArticleUseCase, findArticlesProxy: FindArticlesUseCase, findArticleProxy: FindArticleUseCase, deleteArticleProxy: DeleteArticleUseCase, updateArticleProxy: UpdateArticleUseCase);
    findAllArticles(query: PaginationDto): Promise<IResponse>;
    createArticle(payload: ArticleDto): Promise<IResponse>;
    getById(id: string): Promise<IResponse>;
    updateArticleById(id: string, payload: ArticleDto): Promise<IResponse>;
    deleteArticleById(id: string): Promise<IResponse>;
}
