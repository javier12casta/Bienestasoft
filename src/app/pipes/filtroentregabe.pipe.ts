import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroentregabe'
})
export class FiltroentregabePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
