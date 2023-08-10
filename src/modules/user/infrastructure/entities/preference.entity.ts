import { Entity, PrimaryGeneratedColumn } from 'typeorm'

import { UserEntity } from './'

@Entity({ name: 'preferences' })
export class PreferenceEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    /**
     * Relaciones con la base de datos
     */
    userId: UserEntity

    
}
