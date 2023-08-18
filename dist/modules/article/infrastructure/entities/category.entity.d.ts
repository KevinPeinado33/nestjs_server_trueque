import { ArticleEntity } from '.';
export declare class CategoryEntity {
    id: string;
    title: string;
    description: string;
    status: boolean;
    articles: ArticleEntity[];
}
