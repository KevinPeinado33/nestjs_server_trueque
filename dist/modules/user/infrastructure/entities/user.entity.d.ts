import { ArticleEntity } from '../../../article/infrastructure/entities';
export declare class UserEntity {
    id: string;
    email: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    qualification: number;
    imageProfile: string;
    dateBirth: Date;
    age: string;
    status: boolean;
    numberMaxExchanges: number;
    place: string;
    articles: ArticleEntity[];
    checkFields(): void;
}
