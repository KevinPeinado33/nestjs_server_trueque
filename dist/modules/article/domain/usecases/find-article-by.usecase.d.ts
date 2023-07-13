import { Repository } from 'typeorm';
import { Article } from '../../data/entities';
export declare class FindArticleByUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
}
