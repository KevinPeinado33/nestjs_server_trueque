import { UserEntity } from '../../infrastructure/entities'
import { UserDto } from '../../presentation/dtos'
import { UserModel } from '../models'

export class UserMapper {


    static dtoToModel(dto: UserDto): UserModel {
    
        const model = new UserModel({
            userName: dto.userName,
            password: dto.password,
            email: dto.email,
            phone: dto.phone,
            firstName: dto.firstName,
            lastName: dto.lastName,
            qualification: dto.qualification,
            imageProfile: dto.imageProfile,
            age: dto.age,
            status: dto.status,
            numberMaxExchanges: dto.numberMaxExchanges,
            place: dto.place
        })

        return model

    }

    static entiyToModel(entity: UserEntity): UserModel {
        
        const model = new UserModel({
            id: entity.id,
            userName: entity.userName,
            password: entity.password,
            email: entity.email,
            phone: entity.phone,
            firstName: entity.firstName,
            lastName: entity.lastName,
            qualification: entity.qualification,
            imageProfile: entity.imageProfile,
            age: entity.age,
            status: entity.status,
            numberMaxExchanges: entity.numberMaxExchanges,
            place: entity.place,
            // articles: entity.articles?.map( article => article.title ),
        })
        
        return model

    }

    static entiyToModelResponse(entity: UserEntity, token: string): UserModel {
        
        const model = new UserModel({
            id: entity.id,
            userName: entity.userName,
            password: entity.password,
            email: entity.email,
            phone: entity.phone,
            firstName: entity.firstName,
            lastName: entity.lastName,
            qualification: entity.qualification,
            imageProfile: entity.imageProfile,
            age: entity.age,
            status: entity.status,
            numberMaxExchanges: entity.numberMaxExchanges,
            place: entity.place,
            // token,
            // articles: entity.articles?.map( article => article.title ),
        })
        
        return model

    }

}