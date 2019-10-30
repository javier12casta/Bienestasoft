import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centrodistribucionci',
  templateUrl: './centrodistribucionci.component.html',
  styleUrls: ['./centrodistribucionci.component.css'],
  template: `

  <html>
		<head>
		</head>
		<body>
 
		<div class="container"  class="padre">
		 <div class="card card-container" >
		
		<form class="form-signin padding" >
		<h2></h2>
		<h1>Crear Centro Distribucion </h1>
    <h2></h2>
    
    <span class="btn btn-success">Numero Externo</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="x.NumeroExterno" name="numeroex"
		placeholder="numero Externo" class="form-control" id="inputex">
    
    <h2></h2>
    
    <span class="btn btn-success">Nombre</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Nombre" name="nombre"
		placeholder="Nombre" class="form-control" id="inputnom">

    <h2></h2>

		<span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
		<select name="estadomaestro" [(ngModel)]="x.Estado" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
  </select>
 
		
		<h2></h2>
    <span class="btn btn-success">Responsable</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Responsable" name="res"
		placeholder="Responsable" class="form-control" id="inputres">
    

    <h2></h2>
		<span class="btn btn-success">Direccion</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Direccion" name="nombredic"
		placeholder="Direccion" class="form-control" id="dic">
  
		<h2></h2>
		<span class="btn btn-success">Barrio</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Barrio" name="barrioinput"
		placeholder="Barrio" class="form-control" id="bar">
    <h2></h2>
  

		  <span class="btn btn-success" >Telefono</span>
		  <h2></h2>
		  
		  
		  <input type="number" class="form-control" [(ngModel)]="x.Telefono" name="Nombretel"
			placeholder="Telefono" class="form-control">
		  
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
export class CentrodistribucionciComponent implements OnInit {

  listamaestro:string[]=["0","1"];

  x : Centrodistribucion = {
    
    NumeroExterno:'',
    Nombre : '',
    Responsable : '' ,
    Direccion : '',
    Barrio : '',
    Telefono : 0,
    Estado : 0,

  };

  onClickMe() {
 
    this.Service.postcentrodistribucion(this.x).subscribe(res => {
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
      text: 'Centro Distribucion Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/centrodistribucionc']);
    
      }
    });

}
}