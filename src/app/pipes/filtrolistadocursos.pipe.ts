import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrolistadoc'
})
export class FiltrolistadocursosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.NombreAgenteE.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.Fecha.toString() .indexOf(valor.toString() ) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor.toString()) > -1) {
        console.log(''+ valor);
        resultcod.push(centro);
      }

    }
    return resultcod;
  }

}
