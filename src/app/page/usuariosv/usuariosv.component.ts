import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-usuariosv',
  templateUrl: './usuariosv.component.html',
  styleUrls: ['./usuariosv.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <td>
  <button class="btn btn-dark" routerLink="/usuarios">Volver</button>
  </td>
  <td>
          <button class="btn btn-dark" [routerLink]="['/datosgeneralesusuario']">Crear</button>
        </td>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col"># </th>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Estado</th>
        <th scope="col">NumeroDocumento</th>
        <th scope="col">FechaIngreso</th>
        <th scope="col">NombreUsuarioSistema</th>
        <th scope="col">password</th>
        <th scope="col">Direccion</th>
        <th scope="col">TelefonoFijo</th>
        <th scope="col">TelefonoFijo2</th>
        <th scope="col">TelefonoMovil</th>
        <th scope="col">TelefonoMovil2</th>
        <th scope="col">Email</th>
        <th scope="col">UDS</th>
        <th scope="col">TipoDocumento</th>
        <th scope="col">TipoUsuario</th>
        
        <th scope="col">centros zonales</th>
        <th scope="col">punto entrega</th>
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
        
      </tr>
    </tbody>
  </table>
 
  `

})
export class UsuariosvComponent implements OnInit {
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
