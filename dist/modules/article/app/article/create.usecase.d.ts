import { IUserRepository } from 'src/modules/user/domain/repostories';
import { ArticleDto } from '../../presentation/dtos';
import { ArticleModel } from '../../domain/models';
import { IArticleRepository, ICategoryRepository } from '../../domain/repositories';
export declare class CreateArticleUseCase {
    private readonly articleRepository;
    private readonly categoryRepository;
    private readonly userRepository;
    constructor(articleRepository: IArticleRepository, categoryRepository: ICategoryRepository, userRepository: IUserRepository);
    run(payload: ArticleDto): Promise<ArticleModel>;
}
