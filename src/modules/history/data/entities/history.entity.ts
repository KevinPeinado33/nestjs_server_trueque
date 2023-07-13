import { User } from 'src/modules/user/data/entities'
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity({ name: 'histories' })
export class History {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'start_date'
    })
    startDate: Date

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'end_date'
    })
    endDate: Date

    @Column({ type: 'int', name: 'num_exchanged' })
    numExchanged: number

    @Column({ type: 'boolean' })
    status: boolean

    /**
     * Relacion con otras tablas
     */

    @ManyToOne(
        () => User,
        ( user ) => user.histories
    )
    @JoinColumn({ name: 'user_id' })
    user: User

}