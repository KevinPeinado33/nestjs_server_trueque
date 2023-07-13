import { User } from '../../../user/data/models/user.model';
import { Category } from './';
export declare class Article {
    id: string;
    title: string;
    description: string;
    publishDate: Date;
    images: string[];
    status: boolean;
    condition: number;
    type: string;
    userId: User;
    categoryId: Category;
}
