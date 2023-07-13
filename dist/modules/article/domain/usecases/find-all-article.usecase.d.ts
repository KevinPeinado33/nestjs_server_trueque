import { Article } from '../../data/models';
import { ArticleRepository } from '../repositories';
export declare class FindAllArticleUseCase {
    private articleRepository;
    constructor(articleRepository: ArticleRepository);
    run(): Promise<Article[]>;
}
