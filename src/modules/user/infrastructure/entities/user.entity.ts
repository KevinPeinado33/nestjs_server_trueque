import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { ArticleEntity } from '../../../article/infrastructure/entities'

@Entity({ name: 'users' })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', name: 'user_name', length: '100' })
    userName: string

    @Column({ type: 'varchar', length: '500' })
    password: string

    @Column({ type: 'varchar', length: '100' })
    email: string

    @Column({ type: 'varchar', name: 'phone_number', length: '20' })
    phone: string

    @Column({ type: 'varchar', name: 'first_name', length: '150' })
    firstName: string

    @Column({ type: 'varchar', name: 'last_name', length: '150' })
    lastName: string

    /**
     * Esta calificacion se ira promediando con los intercambios
     * que haga con otras personas
     */
    @Column({ type: 'float' })
    qualification: number

    @Column({ type: 'varchar', name: 'image_profile', length: '1000' })
    imageProfile: string

    @Column({ type: 'varchar', length: '3' })
    age: string

    @Column({ type: 'boolean' })
    status: boolean

    /**
     * Solo se pueden hacer 3 intercambios como maximo
     * podra deshabilitar el intercambio en caso de que no tenga
     * con quien intercambiar.
     */
    @Column({ type: 'int', name: 'number_max_exchanges' })
    numberMaxExchanges: number

    @Column({ type: 'varchar', name: 'place_user', length: '300' })
    place: string

    /**
     * relaciones con las tablas
     * de las base de datos
     */
    @OneToMany(
        () => ArticleEntity,
        ( article ) =>  article.user
    )
    articles: ArticleEntity[]

    @BeforeInsert()
    checkFields() {
        this.status = true
    }

}