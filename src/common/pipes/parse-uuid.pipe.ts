import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { isUUID } from 'class-validator';

@Injectable()
export class CustomParseUUIDPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        
        const valueTransform = String( value )

        if ( !isUUID( valueTransform ) ) {
            throw new BadRequestException(`${ valueTransform }, is no es un uuid.`)
        }

        return valueTransform

    }
    
}