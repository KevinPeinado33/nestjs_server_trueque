export declare class CategoryModel {
    id?: string;
    name: string;
    description: string;
    status?: boolean;
    constructor({ ...values }: ICategoryModel);
}
interface ICategoryModel {
    id?: string;
    name: string;
    description: string;
    status?: boolean;
}
export {};
