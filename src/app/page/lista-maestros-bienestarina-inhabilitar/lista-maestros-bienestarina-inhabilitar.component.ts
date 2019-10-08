import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-maestros-bienestarina-inhabilitar',
  templateUrl: './lista-maestros-bienestarina-inhabilitar.component.html',
  styleUrls: ['./lista-maestros-bienestarina-inhabilitar.component.css'],
  template: `
  
  
  <html>
  <title>Menu Desplegable</title>
  <head>
  
     
  
  </head>
  <body>
            
  
  <h1>Inhabilitar Listas De Datos Maestros</h1>
  <div class="container"  class="padre">
   <div class="card card-container" >
  
  <form class="form-signin padding" >
  <h2></h2>
  <span class="btn btn-success" >Lista a Modificar</span>
  <h2></h2>
  
  <select name="servicio" [(ngModel)]="modalidads" class="select-css">
    <option> Servicios y modalidades</option>
    <option> Referencias de bienestarina</option>
    <option> Lista de precios</option>
    <option> Listado de cursos</option>
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
export class ListaMaestrosBienestarinaInhabilitarComponent implements OnInit {

  modalidads = '';

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

  onClickMe() {
    
    if(this.modalidads == "Servicios y modalidades"){
  
      this.router.navigate(['/inhabilitarserviciom']);
  
    }
  
    if(this.modalidads == "Referencias de bienestarina"){
  
      this.router.navigate(['/inhabilitareferenciab']);
  
    }
  
    if(this.modalidads == "Lista de precios"){
  
      this.router.navigate(['/inhabilitarelistap']);
  
    }
  
    if(this.modalidads == "Listado de cursos"){
  
      this.router.navigate(['/inhabilitarelistadoc']);
  
    }
  
}
}







  