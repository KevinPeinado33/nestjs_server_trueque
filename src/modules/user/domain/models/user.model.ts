export class UserModel {

    id?: string
    password: string
    email: string
    phone: string
    firstName: string
    lastName: string
    qualification: number
    imageProfile: string
    dateBirth: Date
    age: string
    status?: boolean
    numberMaxExchanges: number
    place: string
    
    constructor({ ...values }: IUserModel) {
        
        this.id                 = values.id
        this.password           = values.password
        this.email              = values.email
        this.phone              = values.phone
        this.firstName          = values.firstName
        this.lastName           = values.lastName
        this.imageProfile       = values.imageProfile
        this.dateBirth          = new Date(values.dateBirth)
        this.status             = values.status
        this.numberMaxExchanges = values.numberMaxExchanges
        this.place              = values.place
        
        this.age           = this.calculateAge( this.dateBirth )
        this.qualification = this.calculateQualifation(values.qualification)
        
    }

    calculateQualifation(payload: number) {
        return 5
    }

    private calculateAge(dateBirth: Date): string {
        
        const currentDate = new Date()

        let age = currentDate.getFullYear() - dateBirth.getFullYear()

        if (
            currentDate.getMonth() < dateBirth.getMonth() ||
            ( 
                currentDate.getMonth() === dateBirth.getMonth() && 
                currentDate.getDate() < currentDate.getDate() 
            )
        ) {
            age --
        }
        
        return age.toString()

    }

}

interface IUserModel {
    id?: string
    password: string
    email: string
    phone: string
    firstName: string
    lastName: string
    qualification: number
    imageProfile: string
    dateBirth: string
    status?: boolean
    numberMaxExchanges: number
    place: string
}
