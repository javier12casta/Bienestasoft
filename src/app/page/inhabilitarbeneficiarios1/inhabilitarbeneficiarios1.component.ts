import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarbeneficiarios1',
  templateUrl: './inhabilitarbeneficiarios1.component.html',
  styleUrls: ['./inhabilitarbeneficiarios1.component.css'],
  template: `
  
   
  <table class="table">
      <thead class="thead-green">
        <tr>
          <th scope="col">idBeneficiarios</th>
          <th scope="col">NumeroDocumento</th>
          <th scope="col">FechaIngreso</th>
          <th scope="col">FechaNacimiento</th>
          <th scope="col">PrimerNombre</th>
          <th scope="col">PrimerApellido</th>
          <th scope="col">SegundoNombre</th>
          <th scope="col">SegundoApellido</th>
          <th scope="col">Direccion</th>
          <th scope="col">Pais</th>
          <th scope="col">Departamento</th>
          <th scope="col">Municipio</th>
          <th scope="col">TelefonoFijo</th>
          <th scope="col">TelefonoFijo2</th>
          <th scope="col">TelefonoMovil</th>
          <th scope="col">TelefonoMovil2</th>
          <th scope="col">Email</th>
          <th scope="col">Estado</th>
          <th scope="col">ServicioOmodalidad</th>
          <th scope="col">idGenero</th>
          <th scope="col">idTipoDocumento</th>
         
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cen of benefi">
          <th scope="row">{{cen.idBeneficiarios}}</th>
          <td>{{cen.NumeroDocumento}}</td>
          <td>{{cen.FechaIngreso}}</td>
          <td>{{cen.FechaNacimiento}}</td>
          <td>{{cen.PrimerNombre}}</td>
          <td>{{cen.PrimerApellido}}</td>
          <td>{{cen.SegundoNombre}}</td>
          <td>{{cen.SegundoApellido}}</td>
          <td>{{cen.Direccion}}</td>
          <td>{{cen.Pais}}</td>
          <td>{{cen.Departamento}}</td>
          <td>{{cen.Municipio}}</td>
          <td>{{cen.TelefonoFijo}}</td>
          <td>{{cen.TelefonoFijo2}}</td>
          <td>{{cen.TelefonoMovil}}</td>
          <td>{{cen.TelefonoMovil2}}</td>
          <td>{{cen.Email}}</td>
          <td>{{cen.Estado}}</td>
          <td>{{cen.ServicioOmodalidad}}</td>
          <td>{{cen.idGenero}}</td>
          <td>{{cen.idTipoDocumento}}</td>
  
          <td>
            <button class="btn btn-primary" [routerLink]="['/InhabilitarBeneficiarioi', cen.idBeneficiarios]">Inhabilitar</button>
          </td>
        </tr>
      </tbody>
    </table>
  
  `
})
export class Inhabilitarbeneficiarios1Component implements OnInit {

  benefi: Beneficiario[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {


    this.Service.getBeneficiarios()
    .subscribe(async (data) => {
      this.benefi = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
