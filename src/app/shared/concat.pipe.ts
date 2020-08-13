import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'concatField' })
export class ConcatPipe implements PipeTransform {
  transform(value: any, ...fields: string[]): string {
    const res = [];

    fields.forEach((field) => {
      if (value[field] !== undefined) {
        res.push(`${value[field]}`);
      }
    });

    return res.join(', ');
  }
}
