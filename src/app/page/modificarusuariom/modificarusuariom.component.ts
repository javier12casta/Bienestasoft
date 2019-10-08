import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../interfaces/usuarios';

@Component({
  selector: 'app-modificarusuariom',
  templateUrl: './modificarusuariom.component.html',
  styleUrls: ['./modificarusuariom.component.css']
})
export class ModificarusuariomComponent implements OnInit {

  public usuarios: Usuarios[] = [];


  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
  ) {
  } 

  usu: Usuarios = {

    idUsuarios: 1,
    Nombres : '',
    Apellidos : '',
    Estado : 0,
    NumeroDocumento : 0,
    FechaIngreso : 0,
    NombreUsuarioSistema : '',
    Direccion : '',
    TelefonoFijo :  0,
    TelefonoFijo2 : 0,
    TelefonoMovil: 0,
    TelefonoMovil2 : 0,
    Email : '',
    idTipoDocumento : 0,
    TipoUsuario : '',
  };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUsuariosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.usu = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }
    
    
  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putUsuarios(this.usu.idUsuarios, this.usu)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }
}


