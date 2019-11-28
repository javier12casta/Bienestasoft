import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarcentrodi',
  templateUrl: './modificarcentrodi.component.html',
  styleUrls: ['./modificarcentrodi.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <button class="btn btn-dark" routerLink="/modificarcentrod">Volver</button>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Número Externo</th>
        <th scope="col">Nombre</th>
        <th scope="col">Responsable </th>
        <th scope="col">Dirección </th>
        <th scope="col">Barrio </th>
        <th scope="col"> Teléfono </th>
        <th scope="col">Estado </th>
       
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let usu of cen">
        <th scope="row">{{usu.idCentroDistribucion}}</th>
        <td>{{usu.NumeroExterno}}</td>
        <td>{{usu.Nombre}}</td>
        <td>{{usu.Responsable}}</td>
        <td>{{usu.Direccion}}</td>
        <td>{{usu.Barrio}}</td>
        <td>{{usu.Telefono}}</td>
        <td>{{usu.Estado}}</td>    
        <td>
          <button class="btn btn-primary" [routerLink]="['/modificarcentrom', usu.idCentroDistribucion]">Modificar</button>
        </td>
      </tr>
    </tbody>
  </table>
 
  `

})
export class ModificarcentrodiComponent implements OnInit {

  cen: Centrodistribucion[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getcentrodistribucion()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
      }
      );



  }

}
