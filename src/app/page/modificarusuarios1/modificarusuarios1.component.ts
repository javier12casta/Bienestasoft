import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuarios1',
  templateUrl: './modificarusuarios1.component.html',
  styleUrls: ['./modificarusuarios1.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <button class="btn btn-dark" routerLink="/modificarusuarios">Volver</button>
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
      <th scope="col">password</th>
      <th scope="col">Dirección</th>
      <th scope="col">Teléfono fijo</th>
      <th scope="col">Telefono fijo2</th>
      <th scope="col">Telefono movil</th>
      <th scope="col">Telefono movil2</th>
      <th scope="col">Correo electrónico</th>
      <th scope="col">UDS</th>
      <th scope="col">Tipo documento</th>
      <th scope="col">Tipo usuario</th>
      
      <th scope="col">Centro zonal</th>
      <th scope="col">Punto entrega</th>
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
      <td>{{usu.password}}</td>
      <td>{{usu.Direccion}}</td>
      <td>{{usu.TelefonoFijo}}</td>
      <td>{{usu.TelefonoFijo2}}</td>
      <td>{{usu.TelefonoMovil}}</td>
      <td>{{usu.TelefonoMovil2}}</td>
      <td>{{usu.Email}}</td>
      <td>{{usu.idUDS}}</td>  
      <td>{{usu.idTipoDocumento}}</td>
      <td>{{usu.TipoUsuario}}</td>
      <td>{{usu.idCentrosZonales}}</td>
      <td>{{usu.idPuntoEntrega}}</td>
      
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
