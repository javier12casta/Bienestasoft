import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/interfaces/almacen';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-almacenci',
  templateUrl: './almacenci.component.html',
  styleUrls: ['./almacenci.component.css'],
  template: `

  <html>
		<title>Menu Desplegable</title>
		<head>

			

		</head>
		<body>
              
		
		<div class="container"  class="padre">
		 <div class="card card-container" >
		
		<form class="form-signin padding" >
		<h2></h2>
		<h1>Crear Almacen </h1>
    <h2></h2>
    
    <span class="btn btn-success">Numero Externo</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="x.NumeroExterno " name="numeroex"
		placeholder="numero Externo" class="form-control" id="inputex">
    
    <h2></h2>
    
    <span class="btn btn-success">Nombre Centro Distribucion </span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.NombreCentroDistribucion" name="nombre"
		placeholder="Nombre" class="form-control" id="inputnom">

    <h2></h2>

    <span class="btn btn-success">Responsable</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Responsable" name="res"
		placeholder="Responsable" class="form-control" id="inputres">
    
    <h2></h2>

    <span class="btn btn-success">Capacidad</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="x.Capacidad" name="cap"
		placeholder="Capacidad" class="form-control" id="inputcap">
    
    <h2></h2>

    <span class="btn btn-success" >Unidad de medida</span>
		<h2></h2>
		
		<select name="unidadmedida" [(ngModel)]="x.UnidadMedida" class="select-css">
  <option [value]="item" *ngFor="let item of unidadmedida">{{item}} </option>
  </select>

 <h2></h2>


		<span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
		<select name="estadomaestro" [(ngModel)]="x.Estado" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
  </select>
 
		  
			   <h2></h2>
         
         <span class="btn btn-success">Ceentro de distribucion</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="x.idCentroDistribucion" name="cap"
		placeholder="centro de distribucion" class="form-control" id="inputcap">
				  
			   <button (click)="onClickMe()" class="btn btn-success">Aceptar</button>
				  
			   <h2></h2>
		
  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->

  
	</body>
</html>

  `
})
export class AlmacenciComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadmedida:string[]=["g","ml"];

  x : Almacen = {
    
   
    NumeroExterno : '',
    NombreCentroDistribucion: '',
    Responsable : '',
    Capacidad  : 0,
    UnidadMedida  : '',
    Estado  : 0,
    idCentroDistribucion : 1,
  };

  onClickMe() {
 
    this.Service.postalmacen(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     
     },
     err => {
       console.log(err);
     });
    
   }


  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Almacen Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/almacenc']);
    
      }
    });

}

}
