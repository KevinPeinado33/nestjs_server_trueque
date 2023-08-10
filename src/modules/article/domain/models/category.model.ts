export class CategoryModel {

    id?: string
    name: string
    description: string
    status?: boolean

    constructor({ ...values}: ICategoryModel) {
        this.id          = values.id
        this.name        = values.name
        this.description = values.description
        this.status      = values.status || true
    }

}

interface ICategoryModel {
    id?: string
    name: string
    description: string
    status?: boolean
}
