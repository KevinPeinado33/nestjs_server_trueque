import { UserEntity } from '../../infrastructure/entities'
import { UserDto } from '../../presentation/dtos'

import { UserModel } from '../models'

export class UserMapper {


    static dtoToModel(dto: UserDto): UserModel {
    
        const model = new UserModel({
            password: dto.password,
            email: dto.email,
            phone: dto.phone,
            firstName: dto.firstName,
            lastName: dto.lastName,
            qualification: dto.qualification,
            imageProfile: dto.imageProfile,
            dateBirth: dto.dateBirth,
            status: dto.status,
            numberMaxExchanges: dto.numberMaxExchanges,
            place: dto.place
        })

        return model

    }

    static entiyToModel(entity: UserEntity): UserModel {
        
        const model = new UserModel({
            id: entity.id,
            password: entity.password,
            email: entity.email,
            phone: entity.phone,
            firstName: entity.firstName,
            lastName: entity.lastName,
            qualification: entity.qualification,
            imageProfile: entity.imageProfile,
            dateBirth: entity.dateBirth.toISOString(),
            status: entity.status,
            numberMaxExchanges: entity.numberMaxExchanges,
            place: entity.place,
            // articles: entity.articles?.map( article => article.title ),
        })
        
        return model

    }

}