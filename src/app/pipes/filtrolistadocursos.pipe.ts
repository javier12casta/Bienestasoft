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
      if (centro.NombreAgenteE.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
        resultcod.push(centro);
      } else if (centro.tipodocumento.toString().indexOf(valor.toString() ) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor) > -1) {
        console.log(''+ valor);
        console.log(''+ centro.Estado);
        resultcod.push(centro);
      }

    }
    return resultcod;
  }

}
