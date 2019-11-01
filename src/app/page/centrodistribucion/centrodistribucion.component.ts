import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-centrodistribucion',
  templateUrl: './centrodistribucion.component.html',
  styleUrls: ['./centrodistribucion.component.css']
})
export class CentrodistribucionComponent implements OnInit {

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
