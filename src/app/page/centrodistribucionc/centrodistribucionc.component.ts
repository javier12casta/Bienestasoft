import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';

@Component({
  selector: 'app-centrodistribucionc',
  templateUrl: './centrodistribucionc.component.html',
  styleUrls: ['./centrodistribucionc.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <td>
  <button class="btn btn-dark" routerLink="/centrodistribucion">Volver</button>
  </td>
  <td>
          <button class="btn btn-dark" [routerLink]="['/centrodistribucionci']">Crear</button>
        </td>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">idCentroDistribucion </th>
        <th scope="col">NumeroExterno</th>
        <th scope="col">Nombre</th>
        <th scope="col">Responsable</th>
        <th scope="col">Direccion</th>
        <th scope="col">Barrio</th>
        <th scope="col">Telefono</th>
        <th scope="col">Estado</th>
        
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let centro of cen">
        <th scope="row">{{centro.idCentroDistribucion}}</th>
        <td>{{centro.NumeroExterno }}</td>
        <td>{{centro.Nombre }}</td>
        <td>{{centro.Responsable }}</td>
        <td>{{centro.Direccion }}</td>
        <td>{{centro.Barrio }}</td>
        <td>{{centro.Telefono }}</td>
        <td>{{centro.Estado }}</td>
            
      </tr>
    </tbody>
  </table>
 
  `


})
export class CentrodistribucioncComponent implements OnInit {

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