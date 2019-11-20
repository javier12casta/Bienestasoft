import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Beneficiario } from '../../interfaces/beneficiario';

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
        <th scope="col">idBeneficiarios </th>
        <th scope="col">NumeroDocumento </th>
        <th scope="col">FechaIngreso </th>
        <th scope="col">FechaNacimiento </th>
        <th scope="col">PrimerNombre </th>
        <th scope="col"> PrimerApellido </th>
        <th scope="col">SegundoNombre </th>
        <th scope="col">SegundoApellido</th>
        <th scope="col">Direccion </th>
        <th scope="col">Pais </th>
        <th scope="col"> 	Departamento  </th>
        <th scope="col">Municipio  </th>
        <th scope="col">TelefonoFijo  </th>
        <th scope="col">TelefonoFijo2   </th>
        <th scope="col">TelefonoMovil   </th>
        <th scope="col">TelefonoMovil2   </th>
        <th scope="col"> 	Email    </th>
        <th scope="col"> 	Estado     </th>
        <th scope="col"> ServicioOmodalidad </th>
        <th scope="col"> 	idGenero    </th>
        <th scope="col"> idTipoDocumento  </th>
        <th scope="col"> Uds </th>
        


      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let centro of ben">
        <th scope="row">{{centro.idBeneficiarios}}</th>
        <td>{{centro.NumeroDocumento }}</td>
        <td>{{centro.FechaIngreso  }}</td>
        <td>{{centro.FechaNacimiento }}</td>
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
        <td>{{centro.Estado  }}</td>
        <td>{{centro.ServicioOmodalidad }}</td>
        <td>{{centro.idGenero  }}</td>
        <td>{{centro.idTipoDocumento }}</td>
        <td>{{centro.idUDS }}</td>
      
            
      </tr>
    </tbody>
  </table>
 
  `

})
export class BeneficiariosmComponent implements OnInit {

  ben: Beneficiario[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getBeneficiarios()
      .subscribe(async (data) => {
        this.ben = data;
        console.log(data);
      }
      );
      

  }

}
