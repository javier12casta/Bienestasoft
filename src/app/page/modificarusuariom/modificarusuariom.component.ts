import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../interfaces/usuarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarusuariom',
  templateUrl: './modificarusuariom.component.html',
  styleUrls: ['./modificarusuariom.component.css']
})
export class ModificarusuariomComponent implements OnInit {

  public usuarios: Usuarios[] = [];


  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router
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
          this.usu = Object(res);
          console.log(this.usu);
        }, err => {
          console.log(err);
        }
        );
    }
  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Usuario Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarusuarios1']);
    
      }
    });
  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {

    if(this.usu.NumeroDocumento == null || this.usu.NumeroDocumento == 0 &&  this.usu.idTipoDocumento == null ||  this.usu.idTipoDocumento == 0 && this.usu.TelefonoFijo == null ||  this.usu.TelefonoFijo == 0  && this.usu.TelefonoFijo2 == null ||  this.usu.TelefonoFijo2 == 0  && this.usu.TelefonoMovil == null ||  this.usu.TelefonoMovil == 0 && this.usu.TelefonoMovil2 == null ||  this.usu.TelefonoMovil2 == 0 ){

this.showMenssage3();

    }else{

      this.Service.putUsuarios(this.usu.idUsuarios, this.usu)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
      
    }

    
  }

  showMenssage3(){
    Swal.fire({
      title: 'Error!',
      text: 'campos erroneos o vacios',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
    }

 

}



