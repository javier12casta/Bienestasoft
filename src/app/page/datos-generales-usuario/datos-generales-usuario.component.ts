import { Component, OnInit , Input } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import { Rol } from 'src/app/interfaces/rol';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import {Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-datos-generales-usuario',
  templateUrl: './datos-generales-usuario.component.html',
  styleUrls: ['./datos-generales-usuario.component.css']

})
export class DatosGeneralesUsuarioComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  listat:string[]=["PE","UDS","ADMINISTRADOR"];
  listar:string[]=["1","2","3","4","5","6","7","8","9","10"];
  public doc: Tipodocumento[] = [];
  public rol: Rol[] = [];
  public cen: Centrozonal[] = [];
  public pe: Puntoentrega[] = [];
  public ud: Uds[] = [];
  habilitado = true;
  habilitado1 = true;
  habilitado2 = true;
  nivel;

  x : Usuarios = {
    
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
	   TipoUsuario : '',
     idTipoDocumento : 0,
     password : '',
     idUDS : null,
     idCentrosZonales : null,
     idPuntoEntrega : null,

  };

  onClickMe() {
 
  if(this.x.NumeroDocumento == null || this.x.NumeroDocumento == 0 && this.x.TelefonoFijo == 0  && this.x.TelefonoFijo2 == null ||  this.x.TelefonoFijo2 == 0  && this.x.TelefonoMovil == null ||  this.x.TelefonoMovil == 0 && this.x.TelefonoMovil2 == null ||  this.x.TelefonoMovil2 == 0  && this.x.idTipoDocumento == null ||  this.x.idTipoDocumento == 0 || this.x.password == "" && this.x.Nombres == ""  ){

this.showMenssage3();

  }else{

	this.Service.postUsuarios(this.x).subscribe(res => {
		console.log(this.x);
		this.showMenssage();
	  },
		err => {
		  console.log(err);
		});


  }



 }
 
   constructor(private Service: ServicioService, private router:Router) { }
 
   ngOnInit() {

	this.Service.gettipodocumento()
	.subscribe(res => {
	  this.doc = res;
	}, err => {
	  console.log(err);
  });
  

  this.Service.ObtenerRoles()
	.subscribe(res => {
	  this.rol = res;
	}, err => {
	  console.log(err);
  });
  

   }


   showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Usuario Creado',
      type: 'success',
	  confirmButtonText: 'Ok'
	}).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/usuariosv']);
  
		}
  
    });
  }

  showMenssage3(){
	Swal.fire({
	  title: 'Error!',
	  text: 'campos erroneos o vacios',
	  type: 'error',
	  confirmButtonText: 'Entendido'
	});
	}

 
onChange($event) {

  
  if(this.nivel == "Centrozonal"){
    this.habilitado = false;
    this.habilitado1 = true;
    this.habilitado2 =true;

    this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });


    this.Service.getPunto()
    .subscribe(res => {
      this.pe = null;
    }, err => {
      console.log(err);
    });

    this.Service.getUds()
    .subscribe(res => {
      this.ud = null;
    }, err => {
      console.log(err);
    });

  }

  if(this.nivel == "Punto de entrega"){

    this.habilitado = true;
    this.habilitado1 = false;
    this.habilitado2 =true;

    this.Service.getPunto()
    .subscribe(res => {
      this.pe = res;
    }, err => {
      console.log(err);
    });

    this.Service.getCentro()
    .subscribe(res => {
      this.cen = null;
    }, err => {
      console.log(err);
    });
 
    this.Service.getUds()
    .subscribe(res => {
      this.ud = null;
    }, err => {
      console.log(err);
    });


   }

   if(this.nivel == "Unidad de servicio"){
   
    this.habilitado = true;
    this.habilitado1 = true;
    this.habilitado2 =false;

    this.Service.getUds()
    .subscribe(res => {
      this.ud = res;
    }, err => {
      console.log(err);
    });

    this.Service.getCentro()
    .subscribe(res => {
      this.cen = null;
    }, err => {
      console.log(err);
    });

    this.Service.getPunto()
    .subscribe(res => {
      this.pe = null;
    }, err => {
      console.log(err);
    });

   }

   
}

}
