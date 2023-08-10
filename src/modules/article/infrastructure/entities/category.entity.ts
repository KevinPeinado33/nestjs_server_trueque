import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { ArticleEntity } from '.'

@Entity({ name: 'categories' })
export class CategoryEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: '100' })
    title: string

    @Column({ type: 'varchar', length: '250' })
    description: string

    @Column({ type: 'boolean' })
    status: boolean

    @OneToMany(
        () => ArticleEntity,
        ( article ) =>  article.user
    )
    articles: ArticleEntity[]

}