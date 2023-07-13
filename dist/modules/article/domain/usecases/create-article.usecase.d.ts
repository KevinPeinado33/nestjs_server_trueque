import { UserRepository } from '../../../user/domain/repostories';
import { CreateArticleDto } from '../dtos';
import { ArticleRepository, CategoryRepository } from '../repositories';
export declare class CreateArticleUseCase {
    private articleRepository;
    private categoryRepository;
    private userRepository;
    constructor(articleRepository: ArticleRepository, categoryRepository: CategoryRepository, userRepository: UserRepository);
    run(data: CreateArticleDto): Promise<import("../../data/entities").Article>;
}
