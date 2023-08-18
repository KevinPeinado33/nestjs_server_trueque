export declare class ArticleModel {
    id?: string;
    title: string;
    description: string;
    publishDate?: Date;
    slug?: string;
    images: string[];
    status?: boolean;
    condition: number;
    type?: string;
    userId: string;
    categoryId: string;
    constructor({ ...values }: IArticleModel);
    private generateSlug;
}
interface IArticleModel {
    id?: string;
    title: string;
    description: string;
    publishDate?: Date;
    slug?: string;
    images: string[];
    status?: boolean;
    condition: number;
    type?: string;
    userId: string;
    categoryId: string;
}
export {};
