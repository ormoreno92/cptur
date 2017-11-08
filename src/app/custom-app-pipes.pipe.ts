import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customAppPipes'
})
export class CustomAppPipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null || value === '') { return value; }
    const limit = args ? parseInt(args, 10) : 10;
    const trail = '...';
    value = value.replace(/\n/g, '');
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
