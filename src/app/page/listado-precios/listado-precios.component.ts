import { Component, OnInit } from '@angular/core';
import { Lprecios } from 'src/app/interfaces/listaprecios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css'],
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
 <h1>lista de precios</h1>
 <h2></h2>
 <span class="btn btn-success" >Codigo</span>
 <h2></h2>
 <input type="number" class="form-control" [(ngModel)]="x.Codigo" name="cod"
 placeholder="Codigo" class="form-control" id="codi">
 
 <span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
		<select name="estadomaestro" [(ngModel)]="x.Estado" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
  </select>

  <h2></h2>
    <span class="btn btn-success">Referencia</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Referencia" name="ref"
    placeholder="Referencia" class="form-control" id="refer">
    
    <h2></h2>
		<span class="btn btn-success">Mes</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Mes" name="mes"
    placeholder="m" class="form-control" id="me">
    
    <h2></h2>
		<span class="btn btn-success">año</span>
		<h2></h2>
    
    <input type="number" class="form-control" [(ngModel)]="x.Ano" name="ano"
		placeholder="Año " class="form-control" id="ano">
    
    <h2></h2>
  
		<span class="btn btn-success">Valor cop</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="x.ValorCop" name="valo"
		placeholder="valor" class="form-control" id="cop">
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
export class ListadoPreciosComponent implements OnInit {

  listamaestro: string[] = ["0", "1"];

  x: Lprecios = {


    Referencia: '',
    Mes: '',
    Ano: 0,
    ValorCop: 0,
    Estado: 0,
    Codigo: 0,

  };

  
  
  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    });
  }  




  onClickMe() {

    this.Service.postListaprecios(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

  }

  constructor(private Service: ServicioService) { }

  ngOnInit() {
  }

}
