import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroZonal'
})
export class FiltroZonalPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcod = [];
    var valor = arg;
    for(const centro of value){
      if(centro.CodigoExternoCZ.toLowerCase().indexOf(valor.toString()) > -1){
        resultcod.push(centro);
      
    };
  };
  return resultcod;
}


}
