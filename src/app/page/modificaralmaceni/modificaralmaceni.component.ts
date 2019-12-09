import { Component, OnInit } from '@angular/core';
import { Almacent} from '../../interfaces/almacent';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificaralmaceni',
  templateUrl: './modificaralmaceni.component.html',
  styleUrls: ['./modificaralmaceni.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <button class="btn btn-dark" routerLink="/modificaralmacen">Volver</button>
  <div>
      <label>Modificar almacen centro zonal</label>
  
  {{fecha}}  
  </div>
  
  <div>
    
  </div>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Número externo</th>
        <th scope="col">Nombre almacén</th>
        <th scope="col">Responsable</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Unidad medida</th>
        <th scope="col">Estado</th>
        <th scope="col">Centro distribución</th>
        <th scope="col">Centro zonal</th>
       
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let usu of alm">
        <th scope="row">{{usu.idAlmacenes}}</th>
        <td>{{usu.NumeroExterno}}</td>
        <td>{{usu.Nombre}}</td>
        <td>{{usu.Responsable}}</td>
        <td>{{usu.Capacidad}}</td>
        <td>{{usu.UnidadMedida}}</td>
        <td>
        
        <div *ngIf="usu.Estado == 1">
        Habilitado
      </div>
      <div *ngIf="usu.Estadoo== 0">
        Deshabilitado
      </div>
        
        
        </td>
        <td>{{usu.Nombre}}</td>    
        <td>{{usu.NombreCentroZonal}}</td>  
        <td>
          <button class="btn btn-primary" [routerLink]="['/modificaralmacenm', usu.idAlmacenes]">Modificar</button>
        </td>
      </tr>
    </tbody>
  </table>
 
  `

})
export class ModificaralmaceniComponent implements OnInit {

  alm: Almacent[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
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
