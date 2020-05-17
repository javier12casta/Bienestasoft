import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrobenefi'
})
export class FiltrobenefiPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg===""  || !arg) return value; // esta bien
    for (const centro of value) {
      if (centro.Departamento.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor) > -1) {
        console.log(''+ valor);
        resultcod.push(centro);
      } else if (centro.ServicioOmodalidad.indexOf(valor) > -1) {
        resultcod.push(centro);
      }else if (centro.FechaI.toString().indexOf(valor.toString() ) > -1) {
        resultcod.push(centro);
      }
    return resultcod;
  }

}

}
