import { ArticleModel } from '../../domain/models';
import { ArticleDto } from '../../presentation/dtos';
import { IArticleRepository } from '../../domain/repositories';
export declare class UpdateArticleUseCase {
    private readonly articleRepository;
    constructor(articleRepository: IArticleRepository);
    run(id: string, payload: ArticleDto): Promise<ArticleModel>;
}
