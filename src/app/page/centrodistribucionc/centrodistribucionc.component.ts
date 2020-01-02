import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Centrodistribuciont } from 'src/app/interfaces/centrodistribuciont';

@Component({
  selector: 'app-centrodistribucionc',
  templateUrl: './centrodistribucionc.component.html',
  styleUrls: ['./centrodistribucionc.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <div>
  <button class="btn btn-dark" routerLink="/centrodistribucion">Volver</button>
  <button class="btn btn-dark" [routerLink]="['/centrodistribucionci']">Crear</button>
  </div>
  <div>
          <label>Crear centro de distribucion centro zonal </label>
      
      {{fecha}}  
      </div>
      
   
  <div>
          
        </div>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col"># </th>
        <th scope="col">Número externo</th>
        <th scope="col">Nombre</th>
        <th scope="col">Responsable</th>
        <th scope="col">Dirección</th>
        <th scope="col">Barrio</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Estado</th>
        <th scope="col">Centro Zonal</th>
        
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
        <td>
        <div *ngIf="centro.Estado == 1">
        Habilitado
      </div>
      <div *ngIf="centro.Estado== 0">
        Deshabilitado
      </div>
      </td>
      <td>{{centro.NombreCentroZonal }}</td>
            
      </tr>
    </tbody>
  </table>
 
  `


})
export class CentrodistribucioncComponent implements OnInit {

 cen: Centrodistribuciont[] = [];
 f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionc()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
      }
      );
      


  }

}
