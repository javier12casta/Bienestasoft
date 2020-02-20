import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrodevolucion'
})
export class FiltrodevolucionPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.unidad.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
        resultcod.push(centro);
      } else if (centro.lote.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
        resultcod.push(centro);
      } else if (centro.fecharegistro.toString() .indexOf(valor.toString() ) > -1) {
        resultcod.push(centro);
      }

    }
    return resultcod;
  }

}
