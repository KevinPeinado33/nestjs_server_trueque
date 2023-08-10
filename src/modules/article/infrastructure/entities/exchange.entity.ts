import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

import { ArticleEntity } from './article.entity'

@Entity({ name: 'exchanges' })
export class ExchangeEntity {

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

    @ManyToOne( () => ArticleEntity )
    @JoinColumn({ name: 'article_id' })
    article: ArticleEntity
    
    @ManyToOne( () => ArticleEntity )
    @JoinColumn({ name: 'exchanged_for_id' })
    exchangedFor: ArticleEntity

}