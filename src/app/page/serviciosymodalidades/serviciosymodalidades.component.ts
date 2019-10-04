import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-serviciosymodalidades',
  templateUrl: './serviciosymodalidades.component.html',
  styleUrls: ['./serviciosymodalidades.component.css'],
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
  <span class="btn btn-success" >Estado del dato Maestro</span>
  <h2></h2>
  
  <select name="EstadoDatoMaestro" id="EstadoDatoMaestro" [(ngModel)]="x.EstadoDatoMaestro" style="width: 100%;" class="form-control">
            <option value="1">1</option>
            <option value="0">2</option>
          </select>


  <h2></h2>

  <span class="btn btn-success">Codigo Servicio y madalidad</span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="x.CodigoServicio" name="codigo"
		placeholder="Codigo Servicio y madalidad" class="form-control">
  <h2></h2>
  <span class="btn btn-success">Modalidad</span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="x.Modalidad" name="modalidad"
		placeholder="Modalidad" class="form-control">
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
export class ServiciosymodalidadesComponent implements OnInit {

  x : MaestroBienestarina = {
    
   
    EstadoDatoMaestro : 0,
    CodigoServicio : 0,
    Modalidad : ""

  };

  constructor(private Service: ServicioService) { }

  ngOnInit() {
  }

  clickMessage = '';

  onClickMe() {

  this.clickMessage = 'Se ha creado el usuario con acceso al sistema <número de identificación> en el nivel <primer nivel o Segundo nivel o Tercer nivel>.';
   
  this.Service.postMaestrosBienestrina(this.x).subscribe(res => {
    console.log(this.x);
    },
    err => {
      console.log(err);
    });
   

  }

}
