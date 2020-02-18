import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroentregabe'
})
export class FiltroentregabePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.PrimerNombre.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
        resultcod.push(centro);
      } 

    }
    return resultcod;
  }

}
