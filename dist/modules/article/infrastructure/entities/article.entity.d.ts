import { UserEntity } from 'src/modules/user/infrastructure/entities';
import { CategoryEntity } from '.';
export declare class ArticleEntity {
    id: string;
    title: string;
    description: string;
    publishDate: Date;
    slug: string;
    images: string[];
    status: boolean;
    condition: number;
    type: string;
    user: UserEntity;
    category: CategoryEntity;
}
