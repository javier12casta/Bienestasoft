import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-inhabilitarbeneficiarios1',
  templateUrl: './inhabilitarbeneficiarios1.component.html',
  styleUrls: ['./inhabilitarbeneficiarios1.component.css'],
  template: `
  
  <nav class="navbar navbar-success bg-success">
  <td>
  <button class="btn btn-dark" routerLink="/menu">Volver</button>
         
        </td>

        <div>
          <label>Inhabilitar beneficiario centro zonal</label>
      
      {{fecha}}  
      </div>
      
      <div>
        
      </div>


</nav>

  <table class="table">
      <thead class="thead-green">
        <tr>
        <th scope="col">#</th>
        <th scope="col">Número documento</th>
        <th scope="col">Fecha ingreso</th>
        <th scope="col">Fecha nacimiento</th>
        <th scope="col">Primer nombre</th>
        <th scope="col">Primer apellido</th>
        <th scope="col">Segundo nombre</th>
        <th scope="col">Segundo apellido</th>
        <th scope="col">Dirección</th>
        <th scope="col">País</th>
        <th scope="col">Departamento</th>
        <th scope="col">Municipio</th>
        <th scope="col">Teléfono fijo</th>
        <th scope="col">Teléfono fijo2</th>
        <th scope="col">Teléfono movil</th>
        <th scope="col">Teléfono movil2</th>
        <th scope="col">Correo electrónico</th>
        <th scope="col">Estado</th>
        <th scope="col">Servicio o modalidad</th>
        <th scope="col">Género</th>
        <th scope="col">Tipo documento</th>
        <th scope="col">Centro zonal</th>
         
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cen of bene">
          <th scope="row">{{cen.idBeneficiarios}}</th>
          <td>{{cen.NumeroDocumento}}</td>
          <td>{{cen.FechaI}}</td>
          <td>{{cen.FechaN}}</td>
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
          <td>
          
          <div *ngIf="cen.Estado == 1">
          Habilitado
        </div>
        <div *ngIf="cen.Estado == 0">
          Deshabilitado
        </div>

         </td>
          <td>{{cen.ServicioOmodalidad}}</td>
          <td>{{cen.NombreGenero}}</td>
          <td>{{cen.NombreTipo}}</td>
          <td>{{cen.NombreCentroZonal}}</td>
  
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
  bene: Beneficiariot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  constructor(private Service: ServicioService) { }

  
  ngOnInit() {


   

    this.Service.getBeneficiariosc()
    .subscribe(async (data) => {
      this.bene = data;
      console.log(data);
    }
    );
  }

}
