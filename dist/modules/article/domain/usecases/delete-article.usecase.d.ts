import { Repository } from 'typeorm';
import { Article } from '../../data/entities';
export declare class DeleteArticleUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
    run(id: string): void;
}
