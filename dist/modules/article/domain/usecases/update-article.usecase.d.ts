import { Repository } from 'typeorm';
import { Article } from '../../data/models';
export declare class UpdateArticleUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
}
