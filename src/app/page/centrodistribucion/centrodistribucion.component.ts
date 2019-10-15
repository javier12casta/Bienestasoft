import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-centrodistribucion',
  templateUrl: './centrodistribucion.component.html',
  styleUrls: ['./centrodistribucion.component.css'],
  template: `

  <html>
  <title></title>
  <head>
  </head>
  <body>
             
  <h1>Seleccionar el nivel</h1>
  <div class="container"  class="padre">
   <div class="card card-container" >
  
  <form class="form-signin padding" >
  <h2></h2>
  <span class="btn btn-success" >Nivel</span>
  <h2></h2>
  
  <select name="miselect" [(ngModel)]="seleccionado" class="select-css">
  <option [value]="item" *ngFor="let item of lista">{{item}} </option>
  </select>
  
       <h2></h2>
       <button (click)="siguiente()" type="button" class="btn btn-success" routerLink="/centrodistribucionc">siguiente</button>
       <h2></h2>
       {{resultado}}
  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->

</body>
</html>

  `
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
