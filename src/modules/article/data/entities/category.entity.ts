import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Article } from '.'

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: '100' })
    title: string

    @Column({ type: 'varchar', length: '250' })
    description: string

    @Column({ type: 'boolean' })
    status: boolean

    @OneToMany(
        () => Article,
        ( article ) =>  article.user
    )
    articles: Article[]

}