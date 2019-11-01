import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']

})
export class AlmacenComponent implements OnInit {

  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
  datosgenerales: string[];
  seleccionado='';
  resultado='';
  constructor() 
  {
  }

  ngOnInit() {
  }

  clickMessage='';
 

  siguiente(){

  this.clickMessage = 'funciona';
  this.resultado = this.seleccionado ;
  

  }
}
