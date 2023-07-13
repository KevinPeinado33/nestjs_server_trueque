import { Repository } from 'typeorm';
import { Article } from '../../data/entities';
export declare class UpdateArticleUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
}
