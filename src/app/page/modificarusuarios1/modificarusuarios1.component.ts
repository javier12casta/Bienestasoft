import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuarios1',
  templateUrl: './modificarusuarios1.component.html',
  styleUrls: ['./modificarusuarios1.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">idUsuarios</th>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Estado</th>
        <th scope="col">NumeroDocumento</th>
        <th scope="col">FechaIngreso</th>
        <th scope="col">NombreUsuarioSistema</th>
        <th scope="col">Direccion</th>
        <th scope="col">TelefonoFijo</th>
        <th scope="col">TelefonoFijo2</th>
        <th scope="col">TelefonoMovil</th>
        <th scope="col">TelefonoMovil2</th>
        <th scope="col">Email</th>
        <th scope="col">idPersonalICBF</th>
        <th scope="col">idUDS</th>
        <th scope="col">idTipoDocumento</th>
        <th scope="col">TipoUsuario</th>
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
        <td>{{usu.Direccion}}</td>
        <td>{{usu.TelefonoFijo}}</td>
        <td>{{usu.TelefonoFijo2}}</td>
        <td>{{usu.TelefonoMovil}}</td>
        <td>{{usu.TelefonoMovil2}}</td>
        <td>{{usu.Email}}</td>
        <td>{{usu.idRolPersona}}</td>
        <td>{{usu.idPersonalICBF}}</td>
        <td>{{usu.idUDS}}</td>
        <td>{{usu.idTipoDocumento}}</td>
        <td>{{usu.TipoUsuario}}</td>
        <td>
          <button class="btn btn-primary" [routerLink]="['/modificarusuariom', usu.idUsuarios]">Modificar</button>
        </td>
      </tr>
    </tbody>
  </table>
 
  `


})
export class Modificarusuarios1Component implements OnInit {

  usua: Usuarios[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuarios()
      .subscribe(async (data) => {
        this.usua = data;
        console.log(data);
      }
      );

  }

}
