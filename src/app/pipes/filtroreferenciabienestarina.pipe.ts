import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroreferenciab'
})
export class FiltroreferenciabienestarinaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.Codigo.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.UnidadPrincipal.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor) > -1) {
        console.log(''+ valor);
        resultcod.push(centro);
      }

    }
    return resultcod;
  }

}
