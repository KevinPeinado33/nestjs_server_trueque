import { IArticleRepository } from '../../domain/repositories';
export declare class DeleteArticleUseCase {
    private readonly articleRepository;
    STATUS_DELETE_ARTICLE: boolean;
    constructor(articleRepository: IArticleRepository);
    run(id: string): Promise<void>;
}
