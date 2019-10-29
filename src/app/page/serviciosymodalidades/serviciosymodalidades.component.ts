import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-serviciosymodalidades',
  templateUrl: './serviciosymodalidades.component.html',
  styleUrls: ['./serviciosymodalidades.component.css'],
  template: `<html>
  <title>Menu Desplegable</title>
  <head>

  </head>
  <body>
              

  <h1>Servicio y Modalidades</h1>
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
  <input type="text" class="form-control" [(ngModel)]="x.Servicio " name="codigo"
		placeholder="Codigo Servicio y madalidad" class="form-control">
  <h2></h2>
  <span class="btn btn-success">Modalidad</span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="x.Modalidad" name="modalidad"
		placeholder="Modalidad" class="form-control">
  <h2></h2>
  <button (click)="onClickMe()" class="btn btn-success">Aceptar</button>
 
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
    Modalidad : "",
    Servicio : 0,
    

  };

  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {
  }


  onClickMe() {

 
  this.Service.postMaestrosBienestrina(this.x).subscribe(res => {
    console.log(this.x);
    this.showMenssage();
    },
    err => {
      console.log(err);
    });
   

  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/serviciosymodalidadesv']);
    
      }


    });
  }


}
