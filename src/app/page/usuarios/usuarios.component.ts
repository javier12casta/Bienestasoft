import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import {Router} from '@angular/router'
import { Regional } from 'src/app/interfaces/regional';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
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
       <button (click)="siguiente()" type="button" class="btn btn-success" routerLink="/usuariosv">siguiente</button>
       <h2></h2>
       {{resultado}}
  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->

</body>
</html>

  `

})
export class UsuariosComponent implements OnInit {
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
