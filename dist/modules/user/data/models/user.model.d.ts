import { Article } from '../../../article/data/models';
import { History } from '../../../history/data/models';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    qualification: number;
    imageProfile: string;
    age: number;
    status: boolean;
    numberMaxExchanges: number;
    place: string;
    articles: Article[];
    histories: History[];
}
