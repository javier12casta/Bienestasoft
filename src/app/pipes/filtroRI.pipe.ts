import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroRI'
})
export class FiltroRIPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.almacenes.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.unidadmedida1.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.fechavencimiento.toString().indexOf(valor.toString() ) > -1) {
        resultcod.push(centro);
      }

      

    }
    return resultcod;
  }

}
