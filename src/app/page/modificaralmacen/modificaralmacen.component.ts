import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificaralmacen',
  templateUrl: './modificaralmacen.component.html',
  styleUrls: ['./modificaralmacen.component.css'],
  template: `<html>
  <title>Menu Desplegable</title>
  <head>



  </head>
  <body>

    

  <h1>Modificar Almacen</h1>

  <div class="container" class="padre">
   <div class="card card-container">
  
  <form class="form-signin padding" >
  
              <span class="btn btn-success" >Nivel</span>
              <h2></h2>
              <select class="select-css">
                      <option value="1">Centro Zonal</option>
                      <option value="2">Punto de Entrega</option>
                      <option value="3">Unidad de servicio</option>
              </select>
              <h2></h2>

              <button (click)="onClickMe()" class="btn btn-success">Aceptar</button>
              {{clickMessage}}
           
       <h2></h2>
  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->



</body>
</html>`

})
export class ModificaralmacenComponent implements OnInit {

  onClickMe() {
    
    this.router.navigate(['/modificaralmaceni']);
  
    }

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
