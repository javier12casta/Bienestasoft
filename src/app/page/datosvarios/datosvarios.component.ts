import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datosvarios',
  templateUrl: './datosvarios.component.html',
  styleUrls: ['./datosvarios.component.css'],
  template: ` <html>
  <title>Menu Desplegable</title>
  <head>

      <style type="text/css">
    
        * {
          margin:0px;
          padding:0px;
        }
        
        #header {
          margin:auto;
          width:700px;
          font-family:Arial, Helvetica, sans-serif;
          text-align: center;
        }
        
        ul, ol {
          list-style:none;
        }
        
        .nav > li {
          float:left;
          text-align: center;
        }
        
        .nav li a {
          background-color:rgb(39, 192, 25);
          color:#fff;
          text-decoration:none;
          padding:10px 12px;
          display:block;
          
        }
        
        .nav li a:hover {
          background-color:#434343;
        }
        
        .nav li ul {
          display:none;
          position:absolute;
          min-width:140px;
        }
        
        .nav li:hover > ul {
          display:block;
        }
        
        .nav li ul li {
          position:relative;
        }
        
        .nav li ul li ul {
          right:-140px;
          top:0px;
        }
        
      </style>


  </head>
  <body>
             
  <h1>Lista de datos Maestros</h1>

  
  <div class="container"  class="padre">
   <div class="card card-container" >
  
  <form class="form-signin padding" >
  <h2></h2>
  <h1>Datos varios</h1>
  <h2></h2>
  <span class="btn btn-success">Codigo Interno</span>
  <h2></h2>
  <input type="number" class="form-control" [(ngModel)]="x.CodigoInterno" name="codigoi"
  placeholder="Codigo Interno" class="form-control" id="codigointerno">
  <h2></h2>
  <span class="btn btn-success" >Estado del dato Maestro</span>
  <h2></h2>
  
  <select name="estadomaestro" [(ngModel)]="x.EstadoDatoMaestro" class="select-css">
<option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
</select>
  
  <h2></h2>
  <span class="btn btn-success">Descripcion del registro</span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="x.DescripcionDelRegistro" name="descripcionr"
  placeholder="Descripcion del registro" class="form-control" id="descripcionregistro">
  <h2></h2>
  <span class="btn btn-success">Valor</span>
  <h2></h2>
  <input type="number" class="form-control" [(ngModel)]="x.Valor" name="v"
  placeholder="Nombres" class="form-control" id="valor">

  <h2></h2>
<span class="btn btn-success">Unidad de medida</span>
<h2></h2>

<select name="unidad" [(ngModel)]="x.UnidadDeMedida" class="select-css">
<option [value]="item" *ngFor="let item of unidadm">{{item}} </option>
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
export class DatosvariosComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadm:string[]=["g","personas"];
  
  x : Datosvarios = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 0,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',

  };

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/datosvariosv']);
    
      }
    });
  }

  onClickMe() {
    
    this.Service.postdatosvarios(this.x).subscribe(res => {
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

}
