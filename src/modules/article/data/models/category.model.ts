import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ type: 'varchar', length: '150' })
    title: string

    @Column({ type: 'varchar', length: '150' })
    description: string

    @Column({ type: 'boolean' })
    status: boolean

}