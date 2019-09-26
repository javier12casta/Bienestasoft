import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datos-contacto-usuario',
  templateUrl: './datos-contacto-usuario.component.html',
  styleUrls: ['./datos-contacto-usuario.component.css'],
  template: `

  <html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    
    <script>
        function CrearUsuario(){

          alert("click");

        }
          
          </script>

      <style type="text/css">
    
        * {
          margin:0px;
          padding:0px;
        }
        
        #header {
          margin:auto;
          width:700px;
          font-family:Arial, Helvetica, sans-serif;
        }
        
        ul, ol {
          list-style:none;
        }
        
        .nav > li {
          float:left;
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

  <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
						<div class="modal-dialog">
						   <div class="modal-content">
							  <div class="modal-header">
							 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								 <h3>Cabecera de la ventana</h3>
						  </div>
							  <div class="modal-body">
								 <h4>Texto de la ventana</h4>
								 Mas texto en la ventana.    
						  </div>
							  <div class="modal-footer">
							 <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
						  </div>
						   </div>
						</div>
					 </div>

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

		<h1>Datos de contacto</h1>
		<div class="container" class="padre">
		 <div class="card card-container">
		
		<form class="form-signin padding" >
		
		<span class="btn btn-success" >Direccion</span>
		<h2></h2>
    <input  [ngModel]="valor1" type="text" id="inputdireccion" placeholder="Direccion" required autofocus>
    {{valor1}}
		<h2></h2>
		<span class="btn btn-success">Telefono Fijo 1</span>
		<h2></h2>
		
		<input type="text" id="inputtelefonof1" placeholder="Telefono 1" required autofocus>
		
		<h2></h2>
		<span class="btn btn-success">Telefono Fijo 2</span>
		<h2></h2>
		<input type="text" id="inputtelefonof2" placeholder="Telefono 2" required autofocus>
		<h2></h2>
		<span class="btn btn-success">Telefono movil 1 </span>
		<h2></h2>
		<input type="text" id="inputtelefonom1"  placeholder="Telefono Movil 1" required autofocus>
		<h2></h2>
		<span class="btn btn-success">Telefono movil 2</span>
		<h2></h2>
		<input type="text" id="inputtelefonom2"  placeholder="Telefono Movil 2" required autofocus>
		<h2></h2>
		<span class="btn btn-success">Email</span>
		<h2></h2>
		<input type="text" id="inputemail"  placeholder="Email" required autofocus>
			   <h2></h2>
			   
         <button (click)="onClickMe()" class="btn btn-success">Click me!</button>
         {{clickMessage}}
			   
			   <h2></h2>
		</form><!-- /form -->
		</div><!-- /card-container -->
		</div><!-- /card-container -->
</body>
</html>
    `

})
export class DatosContactoUsuarioComponent implements OnInit {

  clickMessage = '';
  valor1='';

  onClickMe() {
    
   this.valor1;
   this.clickMessage = 'Se ha creado el usuario con acceso al sistema <número de identificación> en el nivel <primer nivel o Segundo nivel o Tercer nivel>.';
  
}

  constructor() { }

  ngOnInit() {


  }

}




