import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarbeneficiarios1',
  templateUrl: './inhabilitarbeneficiarios1.component.html',
  styleUrls: ['./inhabilitarbeneficiarios1.component.css'],
  template: `
  
  <nav class="navbar navbar-success bg-success">
  <td>
  <button class="btn btn-dark" routerLink="/menu">Volver</button>
         
        </td>
</nav>

  <table class="table">
      <thead class="thead-green">
        <tr>
        <th scope="col">#</th>
        <th scope="col">Número Documento</th>
        <th scope="col">Fecha Ingreso</th>
        <th scope="col">Fecha Nacimiento</th>
        <th scope="col">Primer Nombre</th>
        <th scope="col">Primer Apellido</th>
        <th scope="col">Segundo Nombre</th>
        <th scope="col">Segundo Apellido</th>
        <th scope="col">Dirección</th>
        <th scope="col">País</th>
        <th scope="col">Departamento</th>
        <th scope="col">Municipio</th>
        <th scope="col">Teléfono Fijo</th>
        <th scope="col">Teléfono Fijo2</th>
        <th scope="col">Teléfono Movil</th>
        <th scope="col">Teléfono Movil2</th>
        <th scope="col">Correo Electrónico</th>
        <th scope="col">Estado</th>
        <th scope="col">Servicio O Modalidad</th>
        <th scope="col">Genero</th>
        <th scope="col">Tipo Documento</th>
        <th scope="col">uds</th>
         
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
          <td>{{cen.idUDS}}</td>
  
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
