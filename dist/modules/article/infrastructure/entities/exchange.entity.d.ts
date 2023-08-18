import { ArticleEntity } from './article.entity';
export declare class ExchangeEntity {
    id: string;
    qualification: number;
    startDate: Date;
    endDate: Date;
    status: boolean;
    article: ArticleEntity;
    exchangedFor: ArticleEntity;
}
