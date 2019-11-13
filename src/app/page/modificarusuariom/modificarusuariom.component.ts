import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../interfaces/usuarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega} from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';
import { delay } from 'q';


@Component({
  selector: 'app-modificarusuariom',
  templateUrl: './modificarusuariom.component.html',
  styleUrls: ['./modificarusuariom.component.css']
})
export class ModificarusuariomComponent implements OnInit {

  public usuarios: Usuarios[] = [];
  public rol: Rol[] = [];
  public cen: Centrozonal[] = [];
  public pe: Puntoentrega[] = [];
  public ud: Uds[] = [];

 

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
    idCentrosZonales : null,
    idPuntoEntrega : null,
    idUDS : null,
  };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUsuariosid(params.id)
        .subscribe(res => {
          this.usu = Object(res);
          console.log(this.usu);
          delay(2000);
          this
          this.onChange(Event);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.ObtenerRoles()
    .subscribe(res => {
      this.rol = res;
    }, err => {
      console.log(err);
    });

    this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    const es = this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    this.Service.getPunto()
    .subscribe(res => {
      this.pe = res;
    }, err => {
      console.log(err);
    });

    this.Service.getUds()
    .subscribe(res => {
      this.ud = res;
    }, err => {
      console.log(err);
    });
 
  }


    habilitado = true;
    habilitado1 = true;
    habilitado2 = true;
    onChange($event) {
      delay(2000);
      console.log(this.usu.idCentrosZonales > 0 ||this.usu.idCentrosZonales);
    
    if(this.usu.idCentrosZonales !== null ){
      console.log('Entro al if');
      this.habilitado = false;
      this.habilitado1 = true;
      this.habilitado2 = true;

    }else if (this.usu.idPuntoEntrega > 0 || this.usu.idPuntoEntrega != null) {
      this.habilitado = true;
      this.habilitado1 = false;
      this.habilitado2 = true;

    }else if (this.usu.idUDS > 0 || this.usu.idUDS != null) {
      this.habilitado = true;
      this.habilitado1 = true;
      this.habilitado2 = false;
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



