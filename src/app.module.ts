import "reflect-metadata"
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { enviroments } from './common/config/enviroments'
import configuration from './common/config/configuration'

import { ArticleModule } from './modules/article/article.module'
import { DataSourceModule } from './common/data-source/data-source.module'
import { HistoryModule } from './modules/history/history.module'
import { UserModule } from './modules/user/user.module'

@Module({

  imports: [

    /**
     * Configuraciones globales
     */
    ConfigModule.forRoot({
      envFilePath: enviroments[ process.env.NODE_ENV ] || '.env',
      load: [ configuration ],
      isGlobal: true
    }),

    /**
     * Importaciones de base de datos
     * o talvez otros clientes
     */
    DataSourceModule,

    /**
     * Modulos creado unicamente en el proyecto
     */
    ArticleModule,
    HistoryModule,
    UserModule,

  ]

})
export class AppModule { }
