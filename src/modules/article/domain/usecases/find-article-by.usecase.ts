import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Article } from '../../data/entities'

@Injectable()
export class FindArticleByUseCase {

    constructor(
        @InjectRepository( Article ) 
        private articleRepository: Repository< Article >
    ) { }

}
