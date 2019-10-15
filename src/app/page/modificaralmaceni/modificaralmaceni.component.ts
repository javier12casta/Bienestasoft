import { Component, OnInit } from '@angular/core';
import { Almacen} from '../../interfaces/almacen';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificaralmaceni',
  templateUrl: './modificaralmaceni.component.html',
  styleUrls: ['./modificaralmaceni.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <button class="btn btn-dark" routerLink="/menu">Volver</button>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">idAlmacenes</th>
        <th scope="col">NumeroExterno</th>
        <th scope="col">NombreCentroDistribucion</th>
        <th scope="col">Responsable</th>
        <th scope="col">Capacidad</th>
        <th scope="col">UnidadMedida</th>
        <th scope="col">Estado</th>
        <th scope="col">idCentroDistribucion</th>
       
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let usu of alm">
        <th scope="row">{{usu.idAlmacenes}}</th>
        <td>{{usu.NumeroExterno}}</td>
        <td>{{usu.NombreCentroDistribucion}}</td>
        <td>{{usu.Responsable}}</td>
        <td>{{usu.Capacidad}}</td>
        <td>{{usu.UnidadMedida}}</td>
        <td>{{usu.Estado}}</td>
        <td>{{usu.idCentroDistribucion}}</td>    
        <td>
          <button class="btn btn-primary" [routerLink]="['/modificaralmacenm', usu.idAlmacenes]">Modificar</button>
        </td>
      </tr>
    </tbody>
  </table>
 
  `

})
export class ModificaralmaceniComponent implements OnInit {

  alm: Almacen[] = [];

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
