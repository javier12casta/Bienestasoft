import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filtrousuario'
})
export class FiltrousuarioPipe implements PipeTransform {


  convertstring(string){
    let number_parsed: any = parseFloat(string).toFixed(4)
    return number_parsed
}

  transform(value: any, arg: any): any {

    const resultcod = [];
    var valor = arg;
    if (arg === "" || arg.length < 1) return value;
    for (const centro of value) {


      if (centro.Nombres.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      }
     else if (centro.NombreTipo.toString().indexOf(valor.toString()) > -1) {
        resultcod.push(centro);
      } else if (centro.Estado.toString().indexOf(valor.toString()) > -1) {
        console.log(''+ valor);
        resultcod.push(centro);
      } 
    }
    return resultcod;
  }



}
