import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../../../user/data/entities/user.entity'
import { Category } from './'

@Entity({ name: 'articles' })
@Index([ 'title', 'condition', 'type', 'publishDate' ])
export class Article {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: '150' })
    title: string

    @Column({ type: 'varchar', length: '350' })
    description: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'publish_date'
    })
    publishDate: Date

    /**
     * Como regla debe permitirse solo un maximo de 3
     * imagenes y un minimo de 1.
     */
    @Column({ type: 'text' })
    images: string[]

    @Column({ type: 'boolean' })
    status: boolean

    /**
     * El producto en la escala del 1 al 10 que tanto
     * esta correcta, ejemplo zapatillas 6.7 / 10
     */
    @Column({ type: 'float' })
    condition: number

    /**
     * El tipo de intercambio que es el articulo
     * intercambio normal o una meta (normal, goal)
     */
    @Column({ type: 'varchar' })
    type: string


    /**
     * Relaciones con otras tablas
     */
    @ManyToOne(
        () => User,
        ( user ) => user.articles
    )
    @JoinColumn({ name: 'user_id' })
    user: User
    
    @ManyToOne(
        () => Category,
        ( category ) => category.articles
    )
    @JoinColumn({ name: 'category_id' })
    category: Category

}