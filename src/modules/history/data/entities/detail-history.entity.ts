import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'detail_histories' })
export class DetailHistory {

    @PrimaryGeneratedColumn('uuid')
    id: string


    /**
     * Relacion con otras tablas
     */
    historyId: string

}