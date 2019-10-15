import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  template: `<html>
  <title>Menu Desplegable</title>
  <head>

  </head>
  <body>
              

  <h1>Reporte Listas De Datos Maestros</h1>
  <div class="container"  class="padre">
   <div class="card card-container" >
  
  <form class="form-signin padding" >
  <h2></h2>
  <span class="btn btn-success" >Nombre de la lista </span>
  <h2></h2>
  <select name="rols" [(ngModel)]="lista" class="select-css">
  <option [value]="item" *ngFor="let item of listar">{{item}} </option>
  </select>
  <h2></h2>
  <button (click)="onClickMe()" class="btn btn-success">Aceptar</button>
  {{clickMessage}}
       <h2></h2>

       

  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->

</body>
</html>
 `
})
export class ReportesComponent implements OnInit {

  lista = '';
  listar:string[]=["servicio y modalidades","Referencias de Bienestarina","Lista de precios","Listado de cursos","Datos nutricionales"];


  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {
  }

  clickMessage = '';

  onClickMe() {

  if(this.lista == 'servicio y modalidades'){

    this.router.navigate(['/reporteserviciosymodalidades']);
	
  }

  if(this.lista == 'Referencias de Bienestarina'){

    this.router.navigate(['/reportereferenciabienestarina']);
    
  }

  if(this.lista == 'Lista de precios'){

    this.router.navigate(['/reportepreciosbienestarina']);
    
  }

  if(this.lista == 'Listado de cursos'){

    this.router.navigate(['/reportelistadocursos']);
    
  }


  if(this.lista == 'Datos nutricionales' || this.lista == 'numero de cupos' ){

    this.router.navigate(['/reportedatosnutricionales']);
    
  }

}
}
