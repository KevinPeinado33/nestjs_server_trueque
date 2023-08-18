import { ArticleModel } from '../../domain/models';
import { IArticleRepository } from '../../domain/repositories';
export declare class FindArticleUseCase {
    private readonly articleRepository;
    constructor(articleRepository: IArticleRepository);
    run(id: string): Promise<ArticleModel>;
}
