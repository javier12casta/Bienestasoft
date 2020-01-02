import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-usuariosv',
  templateUrl: './usuariosv.component.html',
  styleUrls: ['./usuariosv.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <div>
  <button class="btn btn-dark" routerLink="/usuarios">Volver</button>
  <button class="btn btn-dark" [routerLink]="['/datosgeneralesusuario']">Crear</button>
  </div>
  <div>
  <label>Crear usuarios centro zonal</label>
      
      {{fecha}}  
      </div>
      
    
  <div>
          
        </div>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col"># </th>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Estado</th>
        <th scope="col">Número documento</th>
        <th scope="col">Fecha ingreso</th>
        <th scope="col">Nombre usuario sistema</th>
        <th scope="col">Contraseña</th>
        <th scope="col">Dirección</th>
        <th scope="col">Teléfono fijo</th>
        <th scope="col">Telefono fijo2</th>
        <th scope="col">Telefono movil</th>
        <th scope="col">Telefono movil2</th>
        <th scope="col">Correo electrónico</th>
        <th scope="col">Tipo documento</th>
        <th scope="col">Rol</th>
        <th scope="col">Centro zonal</th>
        
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let usu of usua">
        <th scope="row">{{usu.idUsuarios}}</th>
        <td>{{usu.Nombres}}</td>
        <td>{{usu.Apellidos}}</td>
        <td>{{usu.Estado}}</td>
        <td>{{usu.NumeroDocumento}}</td>
        <td>{{usu.FechaIngreso}}</td>
        <td>{{usu.NombreUsuarioSistema}}</td>
        <td>*******</td>
        <td>{{usu.Direccion}}</td>
        <td>{{usu.TelefonoFijo}}</td>
        <td>{{usu.TelefonoFijo2}}</td>
        <td>{{usu.TelefonoMovil}}</td>
        <td>{{usu.TelefonoMovil2}}</td>
        <td>{{usu.Email}}</td>
        <td>{{usu.NombreTipo}}</td>
        <td>{{usu.RolPersona}}</td>
        <td>{{usu.NombreCentroZonal}}</td>

        
      </tr>
    </tbody>
  </table>
 
  `

})
export class UsuariosvComponent implements OnInit {
  usua: Usuariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

   
      this.Service.getUsuariosc()
      .subscribe(async (data) => {
        this.usua = data;
        console.log(data);
      }
      );
      
  }

}
