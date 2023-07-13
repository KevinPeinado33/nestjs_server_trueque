import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Article } from './article.entity'

@Entity({ name: 'exchanges' })
export class Exchange {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'float' })
    qualification: number

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

    @Column({ type: 'boolean' })
    status: boolean

    /**
     * Relaciones con otras tablas
     */

    @ManyToOne( () => Article )
    @JoinColumn({ name: 'article_id' })
    article: Article
    
    @ManyToOne( () => Article )
    @JoinColumn({ name: 'exchanged_for_id' })
    exchangedFor: Article

}