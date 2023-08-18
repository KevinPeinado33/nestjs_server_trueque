import { ArticleModel } from '../../domain/models';
import { PaginationDto } from '../../presentation/dtos';
import { IArticleRepository } from '../../domain/repositories';
export declare class FindArticlesUseCase {
    private readonly articleRepository;
    constructor(articleRepository: IArticleRepository);
    run(query: PaginationDto): Promise<ArticleModel[]>;
}
