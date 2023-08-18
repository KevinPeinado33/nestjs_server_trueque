import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class CustomParseUUIDPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): string;
}
