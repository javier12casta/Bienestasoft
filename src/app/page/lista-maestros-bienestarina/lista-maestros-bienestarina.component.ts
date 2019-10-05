import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-maestros-bienestarina',
  templateUrl: './lista-maestros-bienestarina.component.html',
  styleUrls: ['./lista-maestros-bienestarina.component.css'],
  template: `<html>
  <title>Menu Desplegable</title>
  <head>

  </head>
  <body>
              

  <h1>Crear Listas De Datos Maestros</h1>
  <div class="container"  class="padre">
   <div class="card card-container" >
  
  <form class="form-signin padding" >
  <h2></h2>
  <span class="btn btn-success" >Nombre de la lista </span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="lista" name="Lista"
		placeholder="Nombre lista" class="form-control" id="lis">
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
export class ListaMaestrosBienestarinaComponent implements OnInit {

  lista = '';
  


  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {


  }

  clickMessage = '';

  onClickMe() {

  if(this.lista == 'servicio y modalidades'){

    this.router.navigate(['/serviciosmodalidades']);
	

  }

  if(this.lista == 'Referencias de Bienestarina'){

    this.router.navigate(['/refrenciasbienestarina']);
    
  }

  if(this.lista == 'Lista de precios'){

    this.router.navigate(['/listaprecios']);
    
  }

  if(this.lista == 'Datos nutricionales' || this.lista == 'numero de cupos' ){

    this.router.navigate(['/datosvarios']);
    
  }




  
  }
}
