import { ArticleEntity } from '../../infrastructure/entities';
import { ArticleDto } from '../../presentation/dtos';
import { ArticleModel } from '../models';
export declare class ArticleMapper {
    static dtoToModel(dto: ArticleDto): ArticleModel;
    static entityToModel(entity: ArticleEntity): ArticleModel;
    static entitiesToModels(entities: ArticleEntity[]): ArticleModel[];
}
