import { Component, OnInit , Input } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { ServicioService } from 'src/app/servicio.service';
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
               
		<h1>Crear Usuario</h1>

		
		<div class="container"  class="padre">
		 <div class="card card-container" >
		
		<form class="form-signin padding" >
		<h2></h2>
		<h1>Datos Generales Usuario</h1>
		<h2></h2>
		<span class="btn btn-success" >Estado del dato Maestro</span>
		<h2></h2>
		
		<select name="estadomaestro" [(ngModel)]="x.Estado" class="select-css">
  <option [value]="item" *ngFor="let item of listamaestro">{{item}} </option>
  </select>
 

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
		<span class="btn btn-success">Nombres</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Nombres" name="nombre"
		placeholder="Nombres" class="form-control" id="nom">
    
  
		<h2></h2>
		<span class="btn btn-success">Apellidos</span>
		<h2></h2>
		<input type="text" class="form-control" [(ngModel)]="x.Apellidos" name="apellidos"
		placeholder="Apellidos" class="form-control" id="app">
    <h2></h2>
  
		<span class="btn btn-success">Fecha de Ingreso</span>
		<h2></h2>
		<input type="date" class="form-control" [(ngModel)]="x.FechaIngreso" name="fechai" placeholder="Fecha" min="2018-01-01" max="2050-12-31" class="form-control">
	
         <h2></h2>
		 {{today}}
		 <h1>Usuario y Asignación de Roles</h1>
		 <span class="btn btn-success" >Usuario en el sistema</span>
  <h2></h2>
  <input type="text" class="form-control" [(ngModel)]="x.NombreUsuarioSistema" name="Usuario"
		placeholder="Usuario Sistema" class="form-control" id="usu">

  <h2></h2>
  <span class="btn btn-success">Tipo Documento</span>
  <h2></h2>
  
  <select name="tipos" [(ngModel)]="tipousuario" class="select-css">
  <option [value]="item" *ngFor="let item of listat">{{item}} </option>
  </select>
  
  
             <h2></h2>
             <span class="btn btn-success">Rol</span>
             <h2></h2>
      
             <select name="rols" [(ngModel)]="tiporol" class="select-css">
             <option [value]="item" *ngFor="let item of listar">{{item}} </option>
             </select>
		  <h2></h2>
		  
		  <h1>Datos de contacto</h1>
		  <span class="btn btn-success" >Direccion</span>
		  <h2></h2>
		  
		  
		  <input type="text" class="form-control" [(ngModel)]="x.Direccion" name="Nombredireccion"
					  placeholder="Direccion" class="form-control">
		  
		  
		  <h2></h2>
		  <span class="btn btn-success">Telefono Fijo 1</span>
		  <h2></h2>
		  
		  <input type="number" class="form-control" [(ngModel)]="x.TelefonoFijo" name="telefonof1"
					  placeholder="Telefono fijo 1" class="form-control">
		  
		  <h2></h2>
		  <span class="btn btn-success">Telefono Fijo 2</span>
		  <h2></h2>
		  <input type="number" class="form-control" [(ngModel)]="x.TelefonoFijo2" name="telefonof2"
					  placeholder="Telefono fijo 2" class="form-control">
		  <h2></h2>
		  <span class="btn btn-success">Telefono Movil 1</span>
		  <h2></h2>
		  <input type="number" class="form-control" [(ngModel)]="x.TelefonoMovil" name="telefonom1"
					  placeholder="Telefono movil 1" class="form-control">
		  <h2></h2>
		  <span class="btn btn-success">Telefono movil 2</span>
		  <h2></h2>
		  <input type="number" class="form-control" [(ngModel)]="x.TelefonoMovil2" name="telefonom2"
					  placeholder="Telefono movil 2" class="form-control">
		  <h2></h2>
		  <span class="btn btn-success">Email</span>
		  <h2></h2>
		  <input type="text" class="form-control" [(ngModel)]="x.Email" name="email"
		  placeholder="Email" class="form-control">
		  
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
export class DatosGeneralesUsuarioComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  listadoc:string[]=["CC","CE","PA"];
  listat:string[]=["PE","UDS","ADMINISTRADOR"];
  listar:string[]=["ROL 1","ROL 2","ROL 3","ROL 4","ROL 5","ROL 6","ROL 7","ROL 8","ROL 9","ROL 10"];


  x : Usuarios = {
    
    Nombres : '',
    Apellidos : '',
    Estado : 0,
    NumeroDocumento : 0,
    FechaIngreso : 0,
    NombreUsuarioSistema : '',
    Direccion : '',
    TelefonoFijo :  0,
    TelefonoFijo2 : 0,
    TelefonoMovil: 0,
    TelefonoMovil2 : 0,
    Email : '',

  };

  clickMessage = '';
  valor1='';
 
  


  onClickMe() {
    
    
	this.valor1;
	this.clickMessage = 'Se ha creado el usuario con acceso al sistema <número de identificación> en el nivel <primer nivel o Segundo nivel o Tercer nivel>.';
	
 
	this.Service.postUsuarios(this.x).subscribe(res => {
	 console.log(this.x);
   },
	 err => {
	   console.log(err);
	 });
	
 }
 
   constructor(private Service: ServicioService) { }
 
   ngOnInit() {
 
	
 
   }
 


}
