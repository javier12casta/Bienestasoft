import { Component, OnInit } from '@angular/core';
import { Rol } from '../../interfaces/Rol';
import { ServicioService } from '../../servicio.service';
import { Permisos } from 'src/app/interfaces/permisos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roli',
  templateUrl: './roli.component.html',
  styleUrls: ['./roli.component.css']
})
export class RoliComponent implements OnInit {

  roles: Rol[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  rol: Rol = {
    idRolPersona: 0,
    RolPersona: '',
    Estado: 1,
    
  };

  permiso: Permisos[] = [];
  permisos: Permisos = {
    idPermiso: 0,
    perInventario: '',
    perEntrega: '',
    perBeneficiarios: '',
    perRol: '',
    perUsuarios: '',
    perCentros: '',
    perUDS: '',
    perPuntoen: '',
    perMaestros: '',
    idRol: 0,
    perAlmacenes: '',
    perCentrosD: '',
  };

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router: Router,
  ) {

  }

  async ngOnInit() {
    await this.Service.ObtenerRoles()
      .subscribe(async (data) => {
        this.roles = data;
        console.log(data);
        console.log('funciona');
      }
      );

    this.Service.getPermisos().subscribe(res => {
      this.permisos = Object(res);
      this.permiso = Object(res);
      console.log(this.permisos);
    });
  }

}
