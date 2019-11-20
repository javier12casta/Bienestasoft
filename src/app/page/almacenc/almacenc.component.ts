import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Almacen} from '../../interfaces/almacen';


@Component({
  selector: 'app-almacenc',
  templateUrl: './almacenc.component.html',
  styleUrls: ['./almacenc.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <td>
         <button class="btn btn-dark" routerLink="/menu">Volver</button>
         </td>
         <td>
          <button class="btn btn-dark" [routerLink]="['/almacenci']">Crear</button>
        </td>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">idAlmacenes </th>
        <th scope="col">NumeroExterno </th>
        <th scope="col">Nombre</th>
        <th scope="col">Responsable </th>
        <th scope="col">Capacidad </th>
        <th scope="col">UnidadMedida </th>
        <th scope="col">Estado </th>
        <th scope="col">idCentroDistribucion</th>
        
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let al of alm">
        <th scope="row">{{al.idAlmacenes}}</th>
        <td>{{al.NumeroExterno }}</td>
        <td>{{al.Nombre }}</td>
        <td>{{al.Responsable }}</td>
        <td>{{al.Capacidad }}</td>
        <td>{{al.UnidadMedida }}</td>
        <td>{{al.Estado }}</td>
        <td>{{al.idCentroDistribucion }}</td>
            
      </tr>
    </tbody>
  </table>
 
  `

})
export class AlmacencComponent implements OnInit {

  alm:Almacen[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getalmacen()
      .subscribe(async (data) => {
        this.alm = data;
        console.log(data);
      }
      );

      
  }

}
