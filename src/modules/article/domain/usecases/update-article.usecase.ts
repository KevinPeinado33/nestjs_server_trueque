import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Article } from '../../data/models'

@Injectable()
export class UpdateArticleUseCase {

    constructor(
        @InjectRepository( Article ) 
        private articleRepository: Repository< Article >
    ) { }

}
