import { Component, OnInit } from '@angular/core';
import { DatosGeneralesUsuarioComponent} from 'src/app/page/datos-generales-usuario/datos-generales-usuario.component';


@Component({
  selector: 'app-usuarioyroles',
  templateUrl: './usuarioyroles.component.html',
  styleUrls: ['./usuarioyroles.component.css'],
  template: `

  <html>
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

  <h1>Usuario y Asignación de Roles</h1>
  <div class="container" class="padre">
   <div class="card card-container">
  
  <form class="form-signin padding" >
  
  <span class="btn btn-success" >Usuario en el sistema</span>
  <h2></h2>
  <input (keyup)="Usuarios($event)" id="inputusuarios" placeholder="Usuario sistema">

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
       
  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->

</body>
</html>
  `
})
export class UsuarioyrolesComponent implements OnInit {

  listat:string[]=["PE","UDS","ADMINISTRADOR"];
  listar:string[]=["ROL 1","ROL 2","ROL 3","ROL 4","ROL 5","ROL 6","ROL 7","ROL 8","ROL 9","ROL 10"];

  constructor() { }

  ngOnInit() {

   
  }

  usu = '';
  tipousuario= '';
  tiporol= '';
  Usuarios(event: any) { // without type info
    this.usu = event.target.value;
  }


}
