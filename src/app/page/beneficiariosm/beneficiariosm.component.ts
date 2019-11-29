import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-beneficiariosm',
  templateUrl: './beneficiariosm.component.html',
  styleUrls: ['./beneficiariosm.component.css'],
  template: `

  <nav class="navbar navbar-success bg-success">
  <td>
  <button class="btn btn-dark" routerLink="/menu">Volver</button>
  </td>
  <td>
  <button class="btn btn-dark" [routerLink]="['/datosgeneralesbeneficiario']">Crear</button>
  </td>
</nav>

<table class="table">
    <thead class="thead-green">
      <tr>
        <th scope="col"># </th>
        <th scope="col">Número Documento </th>
        <th scope="col">Fecha Ingreso </th>
        <th scope="col">Fecha Nacimiento </th>
        <th scope="col">Primer Nombre </th>
        <th scope="col">Primer Apellido </th>
        <th scope="col">Segundo Nombre </th>
        <th scope="col">Segundo Apellido</th>
        <th scope="col">Dirección </th>
        <th scope="col">País </th>
        <th scope="col">Departamento  </th>
        <th scope="col">Municipio  </th>
        <th scope="col">Teléfono Fijo  </th>
        <th scope="col">Teléfono Fijo2   </th>
        <th scope="col">Teléfono Movil   </th>
        <th scope="col">Teléfono Movil2   </th>
        <th scope="col"> 	Correo Electrónico    </th>
        <th scope="col"> 	Estado     </th>
        <th scope="col"> Servicio O modalidad </th>
        <th scope="col"> 	Género    </th>
        <th scope="col"> Tipo Documento  </th>
        <th scope="col"> Uds  </th>

      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let centro of bene">
        <th scope="row">{{centro.idBeneficiarios}}</th>
        <td>{{centro.NumeroDocumento }}</td>
        <td>{{centro.FechaI  }}</td>
        <td>{{centro.FechaN }}</td>
        <td>{{centro.PrimerNombre }}</td>
        <td>{{centro.PrimerApellido }}</td>
        <td>{{centro.SegundoNombre }}</td>
        <td>{{centro.SegundoApellido }}</td>
        <td>{{centro.Direccion}}</td>
        <td>{{centro.Pais }}</td>
        <td>{{centro.Departamento  }}</td>
        <td>{{centro.Municipio }}</td>
        <td>{{centro.TelefonoFijo }}</td>
        <td>{{centro.TelefonoFijo2 }}</td>
        <td>{{centro.TelefonoMovil }}</td>
        <td>{{centro.TelefonoMovil2 }}</td>
        <td>{{centro.Email }}</td>
        <td>
        
        <div *ngIf="centro.Estado == 1">
        Habilitado
      </div>
      <div *ngIf="centro.Estado == 0">
        Deshabilitado
      </div>
        
       </td>
        <td>{{centro.ServicioOmodalidad }}</td>
        <td>{{centro.NombreGenero  }}</td>
        <td>{{centro.NombreTipo }}</td>
        <td>{{centro.NombreUDS }}</td>
      
            
      </tr>
    </tbody>
  </table>
 
  `

})
export class BeneficiariosmComponent implements OnInit {

  ben: Beneficiario[] = [];
  bene: Beneficiariot[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getBeneficiarios()
      .subscribe(async (data) => {
        this.ben = data;
        console.log(data);
      }
      );

      this.Service.getBeneficiariost()
      .subscribe(async (data) => {
        this.bene = data;
        console.log(data);
      }
      );
      

  }

}
