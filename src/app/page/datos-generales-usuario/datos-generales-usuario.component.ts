import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-generales-usuario',
  templateUrl: './datos-generales-usuario.component.html',
  styleUrls: ['./datos-generales-usuario.component.css'],
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
                <div class="padre">
				<div id="header" class="hijo_uno">
						<ul class="nav">
													
							<li><a routerLink="/datosgeneralesusuario">Datos Generales</a></li>
							<li><a routerLink="//usuariosroles">Usuario y Asignación de Roles</a></li>
							<li><a routerLink="/datoscontactousuario">Datos de contacto</a></li>
					
						</ul>
					</div>
				</div>
		<h1>Crear Usuario</h1>

		<h1>Datos Generales Usuario</h1>
		<div class="container"  class="padre">
		 <div class="card card-container" >
		
		<form class="form-signin padding" >
		<h2></h2>
		<span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
		<select name="estadomaestro" [(ngModel)]="maestro" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
  </select>
 

		<h2></h2>
		<span class="btn btn-success">Tipo Documento</span>
		<h2></h2>
		
    <select name="tipodocumento" [(ngModel)]="tipdoc" class="select-css">
    <option [value]="item" *ngFor="let item of listadoc">{{item}} </option>
    </select>
		
		<h2></h2>
    <span class="btn btn-success">Numero de Documento</span>
		<h2></h2>
    <input (keyup)="documento($event)" id="inputdocumento" placeholder="Documento">
    

    <h2></h2>
		<span class="btn btn-success">Nombres</span>
		<h2></h2>
		<input (keyup)="Nombres($event)" id="inputNombres" placeholder="Nombres" type="text">
  
		<h2></h2>
		<span class="btn btn-success">Apellidos</span>
		<h2></h2>
    <input (keyup)="Apellidos($event)" id="inputApllidos" placeholder="Apellidos" type="text">
    <h2></h2>
  
		<span class="btn btn-success">Fecha de Ingreso</span>
		<h2></h2>
		<input [(ngModel)]="today"  id="fechaingreso" min="2018-01-01" max="2050-12-31" type="date">
         <h2></h2>
         {{today}}

		</form><!-- /form -->
		</div><!-- /card-container -->
		</div><!-- /card-container -->

	</body>
</html>

  `


})
export class DatosGeneralesUsuarioComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  listadoc:string[]=["CC","CE","PA"];

  constructor() { }

  ngOnInit() {
  }


  maestro= '';
  tipdoc='';
  doc = '';
  nomb = '';
  appel = '';
  feching = '';

 

  documento(event: any) { // without type info
    this.doc = event.target.value;
  }

  Nombres(event: any) { // without type info
    this.nomb = event.target.value;
  }

  Apellidos(event: any) { // without type info
    this.appel = event.target.value;
  }

  FechaIngreso(event: any) { // without type info
    this.feching = event.target.value;
  }


}
