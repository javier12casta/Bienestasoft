import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroinventario'
})
export class FiltroinventarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.FechaRecepcion.toString().indexOf(valor) > -1) {
        resultcod.push(centro);
      } 

    }
    return resultcod;
  }

}
