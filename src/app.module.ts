import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppService } from './app.service'
import { AppController } from './app.controller'

import { enviroments } from './common/config/enviroments'
import configuration from './common/config/configuration'

import { ArticleModule } from './modules/article/article.module'
import { DataSourceModule } from './common/data-source/data-source.module'

@Module({
  imports: [

    /**
     * Configuraciones globales
     */
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
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
    ArticleModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
