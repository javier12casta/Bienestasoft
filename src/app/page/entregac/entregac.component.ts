import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/app/interfaces/entrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregac',
  templateUrl: './entregac.component.html',
  styleUrls: ['./entregac.component.css'],
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
		<h1>Crear Entrega </h1>
    <h2></h2>
    
    <span class="btn btn-success">Cantidad Entregada</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="entrea.CantidadEntregada" name="cane"
		placeholder="Cantidad Entregada" class="form-control" id="inputen">
    
    <h2></h2>
    
    <span class="btn btn-success">Fecha Entrega </span>
		<h2></h2>
		<input type="date" class="form-control" [(ngModel)]="entrea.FechaEntrega" name="fechai" placeholder="Fecha" min="2018-01-01" max="2050-12-31" class="form-control">
    <h2></h2>

		<span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
		<select name="estadomaestro" [(ngModel)]="entrea.EstadoEntrega" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
  </select>

		  
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
export class EntregacComponent implements OnInit {

  entrega: Entrega[] = [];
  listamaestro:string[]=["0","1"];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    entrea: Entrega = {
      idEntrega: 0,
      CantidadEntregada : '',
      FechaEntrega : 0,
      EstadoEntrega : '',
    };


  ngOnInit() {
  }

 //insertar Datos ------------------------------------------------
 onClickMe() {
  delete this.entrea.idEntrega;
  this.Service.postEntrega(this.entrea).subscribe(res => {
    console.log(this.entrea);
    console.log(res);
    this.showMenssage();
  },
    err => {
      console.log(err);
      this.showMenssage2();
    });

}

//mensajes de creacion
showMenssage(){
  Swal.fire({
    title: 'Creado!',
    text: 'Entrega Creada',
    type: 'success',
    confirmButtonText: 'Entendido'
  }).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/entrega']);
  
		}
  
    });
}
//Mensaje de error

showMenssage2(){
Swal.fire({
  title: 'Error!',
  text: 'Error al crear Entrega',
  type: 'error',
  confirmButtonText: 'Entendido'
});
}


}
