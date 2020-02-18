import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtronumerocu'
})
export class FiltronumerocuposPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.CodigoInterno.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.UnidadDeMedida.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.	EstadoDatoMaestro.toString().indexOf(valor.toString()) > -1) {
        console.log(''+ valor);
        resultcod.push(centro);
      }

    }
    return resultcod;
  }

}
