import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Listadocursos } from 'src/app/interfaces/listadocursos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listadocursos',
  templateUrl: './listadocursos.component.html',
  styleUrls: ['./listadocursos.component.css'],
  template: `

  <html>
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
               
		<h1>Crear Datos Maestros</h1>

		
		<div class="container"  class="padre">
		 <div class="card card-container" >
		
		<form class="form-signin padding" >
		<h2></h2>
		<h1>Listado de cursos</h1>
    <h2></h2>
    <span class="btn btn-success">Nombre Agente Educativo</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.NombreAgenteE" name="nombreagente"
		placeholder="Nombre Agente Educativo" class="form-control" id="agentee">


		<h2></h2>
		<span class="btn btn-success">Tipo Documento</span>
		<h2></h2>
		
    <select name="tipodocumento" class="select-css">
    <option [value]="item" *ngFor="let item of listadoc">{{item}} </option>
    </select>
		
		<h2></h2>
    <span class="btn btn-success">Numero de Documento</span>
		<h2></h2>
		<input type="number" class="form-control" [(ngModel)]="x.NumeroDocumento" name="numerodoc"
		placeholder="numero Documento" class="form-control" id="inputdoc">
    <h2></h2>
    <h1>Beneficiario</h1>
    <h2></h2>
		<span class="btn btn-success">Numero de documento de identidad</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.NumeroDocumento" name="numerodoc"
		placeholder="Numero de documento de identidad" class="form-control" id="numeroidentidad">
    
  
		<h2></h2>
		<span class="btn btn-success">  Primer nombre beneficiario ICBF</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Apellidos" name="nbeneficiario"
		placeholder="Primer nombre beneficiario ICBF" class="form-control" id="app">
    <h2></h2>
  
    <span class="btn btn-success">  Segundo nombre beneficiario ICBF</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Apellidos" name="nbeneficiario2"
		placeholder="Segundo nombre beneficiario ICBF" class="form-control" id="app">
    <h2></h2>

    <span class="btn btn-success">Primer Apellido beneficiario ICBF</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Apellidos" name="abeneficiario1"
		placeholder="Primer Apellido beneficiario ICBF" class="form-control" id="app">
    <h2></h2>

  
    <span class="btn btn-success">Segundo Apellido beneficiario ICBF</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Apellidos" name="abeneficiario2"
		placeholder="Segundo Apellido beneficiario ICBF" class="form-control" id="app">
    <h2></h2>

		<span class="btn btn-success">Fecha</span>
		<h2></h2>
		<input type="date" class="form-control" [(ngModel)]="x.Fecha" name="fechai" placeholder="Fecha" min="2018-01-01" max="2050-12-31" class="form-control">
	
<h2></h2>
		 {{today}}
     <h2></h2>
     <span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
     <select name="estadomaestro" [(ngModel)]="x.Estado" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
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
export class ListadocursosComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  listadoc:string[]=["CC","CE","PA"];

  x : Listadocursos = {
    
    NombreAgenteE :'',
    NumeroDocumento : '',
    Fecha : 0,
    Estado : 0,


  };

 

  constructor(private Service: ServicioService) { }

  ngOnInit() {
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  onClickMe() {
    
    

   
    this.Service.postlistadocursos(this.x).subscribe(res => {
	 console.log(this.x);
	 this.showMenssage();
     },
     err => {
       console.log(err);
     });
    
   }

}
