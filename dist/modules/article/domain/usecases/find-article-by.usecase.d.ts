import { Repository } from 'typeorm';
import { Article } from '../../data/models';
export declare class FindArticleByUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
}
