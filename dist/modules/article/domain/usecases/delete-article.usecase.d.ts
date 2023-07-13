import { Repository } from 'typeorm';
import { Article } from '../../data/models';
export declare class DeleteArticleUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
}
