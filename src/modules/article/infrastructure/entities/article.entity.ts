import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { UserEntity } from 'src/modules/user/infrastructure/entities'
import { CategoryEntity } from '.'

@Entity({ name: 'articles' })
export class ArticleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Index()
    @Column({ type: 'varchar', length: '150' })
    title: string

    @Column({ type: 'varchar', length: '350' })
    description: string

    @Index()
    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'publish_date'
    })
    publishDate: Date

    @Index()
    @Column({ type: 'varchar', length: '350' })
    slug: string

    /**
     * Como regla debe permitirse solo un maximo de 3
     * imagenes y un minimo de 1.
     */
    @Column({ type: 'text', array: true })
    images: string[]

    @Column({ type: 'boolean' })
    status: boolean

    /**
     * El producto en la escala del 1 al 10 que tanto
     * esta correcta, ejemplo zapatillas 6.7 / 10
     */
    @Index()
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
        () => UserEntity,
        ( user ) => user.articles
    )
    @JoinColumn({ name: 'user_id' })
    user: UserEntity
    
    @ManyToOne(
        () => CategoryEntity,
        ( category ) => category.articles
    )
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity

}