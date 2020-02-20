import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrousuario'
})
export class FiltrousuarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {
      if (centro.NombreTipo.toString().indexOf(valor) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor) > -1) {
        console.log(''+ valor);
        resultcod.push(centro); 
      } else if (centro.FechaIngreso.toString().indexOf(valor.toString() ) > -1) {
        resultcod.push(centro);
      }

      

    }
    return resultcod;
  }

}
