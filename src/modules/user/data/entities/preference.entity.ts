import { Entity, PrimaryGeneratedColumn } from 'typeorm'

import { User } from './'

@Entity({ name: 'preferences' })
export class Preference {

    @PrimaryGeneratedColumn('uuid')
    id: string

    /**
     * Relaciones con la base de datos
     */
    userId: User

    
}
