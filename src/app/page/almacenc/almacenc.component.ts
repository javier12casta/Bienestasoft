import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Almacent} from '../../interfaces/almacent';


@Component({
  selector: 'app-almacenc',
  templateUrl: './almacenc.component.html',
  styleUrls: ['./almacenc.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <td>
         <button class="btn btn-dark" routerLink="/crearalmacen">Volver</button>
         </td>
         <td>
          <button class="btn btn-dark" [routerLink]="['/almacenci']">Crear</button>
        </td>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col"># </th>
        <th scope="col">Número externo </th>
        <th scope="col">Nombre almacén </th>
        <th scope="col">Responsable </th>
        <th scope="col">Cantidad </th>
        <th scope="col">Unidad medida </th>
        <th scope="col">Estado </th>
        <th scope="col">Centro distribución</th>
        <th scope="col">Centro zonal</th>
        
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
        <td>
        
        <div *ngIf="al.Estado == 1">
          Habilitado
        </div>
        <div *ngIf="al.Estado== 0">
          Deshabilitado
        </div>
        
        </td>
        <td>{{al.Nombre }}</td>
        <td>{{al.NombreCentroZonal}}</td>
            
      </tr>
    </tbody>
  </table>
 
  `

})
export class AlmacencComponent implements OnInit {

  alm:Almacent[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenc()
      .subscribe(async (data) => {
        this.alm = data;
        console.log(data);
      }
      );   
  }

}
