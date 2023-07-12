import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'articles' })
export class Article {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ type: 'varchar', length: '150' })
    title: string

    @Column({ type: 'varchar', length: '150' })
    description: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    publishDate: Date

    @Column({ type: 'text' })
    images: string[]

    @Column({ type: 'boolean' })
    status: boolean

}