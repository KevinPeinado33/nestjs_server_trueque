export declare class UserModel {
    id?: string;
    password: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    qualification: number;
    imageProfile: string;
    dateBirth: Date;
    age: string;
    status?: boolean;
    numberMaxExchanges: number;
    place: string;
    constructor({ ...values }: IUserModel);
    calculateQualifation(payload: number): number;
    private calculateAge;
}
interface IUserModel {
    id?: string;
    password: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    qualification: number;
    imageProfile: string;
    dateBirth: string;
    status?: boolean;
    numberMaxExchanges: number;
    place: string;
}
export {};
