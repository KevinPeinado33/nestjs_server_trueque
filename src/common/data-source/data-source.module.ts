import { Module, Global} from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Client } from 'pg'

import configuration from '../config/configuration'

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            
            inject: [ configuration.KEY ],
            
            useFactory: ( configService: ConfigType< typeof configuration > ) => {
                
                const { user, host, dbName, password, port } = configService.postgres

                return {
                    type: 'postgres',
                    host,
                    port,
                    username: user,
                    password,
                    database: dbName,
                    synchronize: false,
                    autoLoadEntities: true
                }
            
            }
     
        })
    ],
    
    providers: [{
        
        provide: 'PG',
        
        useFactory: ( configService: ConfigType< typeof configuration > ) => {

            const { user, host, dbName, password, port } = configService.postgres

            const clientDB = new Client({
                user,
                host,
                database: dbName,
                password,
                port
            })

            clientDB.connect()

            return clientDB
        
        },

        inject: [ configuration.KEY ]
    
    }],

    exports: [ 'PG', TypeOrmModule ]
})
export class DataSourceModule { }
