import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuarios1',
  templateUrl: './modificarusuarios1.component.html',
  styleUrls: ['./modificarusuarios1.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <button class="btn btn-dark" routerLink=""> Modificar </button>
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
      <tr *ngFor="let cen of centros">
        <th scope="row">{{cen.idCentrosZonales}}</th>
        <td>{{cen.NombreCentroZonal}}</td>
        <td>{{cen.idMunicipios}}</td>
        <td>{{cen.idComunas}}</td>
        <td>{{cen.CodigoExternoJcz}}</td>
        <td>{{cen.CodigoExternoCZ}}</td>
        <td>{{cen.Estado}}</td>
        <td>{{cen.idRegional}}</td>
        <td>
          <button class="btn btn-primary" [routerLink]="['/centrozonali', cen.idCentrosZonales]">Modificar</button>
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
