import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-reportecentrodistribucion',
  templateUrl: './reportecentrodistribucion.component.html',
  styleUrls: ['./reportecentrodistribucion.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <button class="btn btn-dark" routerLink="/menu">Volver</button>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">idCentroDistribucion</th>
        <th scope="col">NumeroExterno</th>
        <th scope="col">Nombre</th>
        <th scope="col">Responsable </th>
        <th scope="col">Direccion </th>
        <th scope="col">Barrio </th>
        <th scope="col"> Telefono </th>
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
      </tr>
    </tbody>
  </table>
 
  <button class="btn btn-primary" >Generar PDF</button>

  `

})
export class ReportecentrodistribucionComponent implements OnInit {

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
