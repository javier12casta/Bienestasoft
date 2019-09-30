import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { 
    
  }
  roles: Rol={
    idRolPersona : 0,
    RolPersona : '',
    Estado : 1,
    Transaccion : '',
    Almacen : '',
   
  };
  modificar = false;

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getRol(params.id)
        .subscribe(res => {
          console.log(res);
          this.Roles = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }

    

  }

  //insertar Datos ------------------------------------------------
  insertDatos(Centrozonal: string) {
    delete this.Roles.idRolPersona;
    this.Service.insertarRol(this.Roles).subscribe(res => {
      console.log(this.Roles);
      console.log(res);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.ActualizarRol(this.Roles.idRolPersona, this.Roles)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }

}
