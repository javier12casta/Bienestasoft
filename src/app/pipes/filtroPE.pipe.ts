import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPE'
})
export class FiltroPEPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.NombrePE.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
        resultcod.push(centro);
      } else if (centro.CodigoExternoPE.indexOf(valor) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor) > -1) {
        console.log(''+ valor);
        resultcod.push(centro);
      } 

    }
    return resultcod;
  }

}
