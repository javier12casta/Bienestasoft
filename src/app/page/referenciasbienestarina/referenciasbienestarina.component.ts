import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-referenciasbienestarina',
  templateUrl: './referenciasbienestarina.component.html',
  styleUrls: ['./referenciasbienestarina.component.css'],
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
  <span class="btn btn-success" >Código </span>
  <h2></h2>
  <input type="number" class="form-control" [(ngModel)]="x.Codigo" name="cod"
		placeholder="Codigo " class="form-control" id="codi">
  <h2></h2>
  <span class="btn btn-success" >Estado del dato Maestro</span>
  <h2></h2>
  
  <select name="estadomaestro" [(ngModel)]="x.Estado" class="select-css">
<option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
</select>

  <h2></h2>

  <span class="btn btn-success" >Referencia </span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="x.Referencia" name="ref"
		placeholder="Referencia" class="form-control" id="referencia">
  <h2></h2>

  <span class="btn btn-success" >Unidad de medida principal</span>
  <h2></h2>
  
  <select name="unidadm" [(ngModel)]="x.UnidadPrincipal" class="select-css">
<option [value]="item" *ngFor="let item of unidadmedidad">{{item}} </option>
</select>

<span class="btn btn-success" >Cantidad Equivalente </span>
  <h2></h2>
  <input type="number" class="form-control" [(ngModel)]="x.Cantidad" name="cantidade"
		placeholder="Cantidad Equivalente" class="form-control" id="cantidadequivalente">
  <h2></h2>

  <span class="btn btn-success" >Unidad de medida secundaria </span>
  <h2></h2>
  <select name="unidadsecundario" [(ngModel)]="x.UnidadSecundaria"  class="select-css">
  <option [value]="item" *ngFor="let item of unidadsecundario">{{item}} </option>
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
export class ReferenciasbienestarinaComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadmedidad:string[]=["bolsa","caja","otra presentacion"];
  unidadsecundario:string[]=["g","ml"];

  x : TipoBienestarina  = {
    
   
   Codigo  : 0,
    Estado : '',
    Referencia : '',
    UnidadPrincipal : '',
    Cantidad : 0,
    UnidadSecundaria:  '',

  };


  constructor(private Service: ServicioService) { }

  ngOnInit() {
  }

  clickMessage = '';

  onClickMe() {

    
    this.Service.postTipobienestarina(this.x).subscribe(res => {
      console.log(this.x);
      },
      err => {
        console.log(err);
      });

  }

}
