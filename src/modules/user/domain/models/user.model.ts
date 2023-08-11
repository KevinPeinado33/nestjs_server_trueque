export class UserModel {

    id?: string
    userName: string
    password: string
    email: string
    phone: string
    firstName: string
    lastName: string
    qualification: number
    imageProfile: string
    age: string
    status?: boolean
    numberMaxExchanges: number
    place: string
    // articles?: string[]
    // token?: string
    
    constructor({ ...values }: IUserModel) {
        
        this.id = values.id
        this.userName = values.userName
        this.password = values.password
        this.email = values.email
        this.phone = values.phone
        this.firstName = values.firstName
        this.lastName = values.lastName
        this.imageProfile = values.imageProfile
        this.age = values.age
        this.status = values.status
        this.numberMaxExchanges = values.numberMaxExchanges
        this.place = values.place
        // this.articles = values.articles
        // this.token = values.token
        this.qualification = this.calculateQualifation(values.qualification)

    }

    // TODO: qualifation es el promedio que tiene en el intercambio
    calculateQualifation(payload: number) {
        return 12
    }

}

interface IUserModel {
    id?: string
    userName: string
    password: string
    email: string
    phone: string
    firstName: string
    lastName: string
    qualification: number
    imageProfile: string
    age: string
    status?: boolean
    numberMaxExchanges: number
    place: string
    // articles?: string[]
    // token?: string
}
