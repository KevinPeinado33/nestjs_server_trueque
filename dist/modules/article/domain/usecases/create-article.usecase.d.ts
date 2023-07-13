import { Repository } from 'typeorm';
import { Article } from '../../data/models';
import { CreateArticleDto } from '../dtos';
export declare class CreateArticleUseCase {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
    run(data: CreateArticleDto): Promise<Article>;
}
