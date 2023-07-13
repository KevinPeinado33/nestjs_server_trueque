import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Article } from '../../../article/data/models'
import { History } from '../../../history/data/models'

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

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

    @Column({ type: 'int' })
    age: number

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
        () => Article,
        ( article ) =>  article.userId
    )
    articles: Article[]

    @OneToMany(
        () => History,
        ( history ) =>  history.userId
    )
    histories: History[]

}