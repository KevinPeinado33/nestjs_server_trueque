import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'preferences' })
export class Preference {

    @PrimaryGeneratedColumn('uuid')
    id: string

    /**
     * Relaciones con la base de datos
     */
    userId: string

    
}
