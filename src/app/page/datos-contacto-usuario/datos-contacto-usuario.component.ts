import { Component, OnInit , Input } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import { Rol } from 'src/app/interfaces/rol';
import {Puntoentrega } from 'src/app/interfaces/puntoentrega';

import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-contacto-usuario',
  templateUrl: './datos-contacto-usuario.component.html',
  styleUrls: ['./datos-contacto-usuario.component.css'],
  

})


  


export class DatosContactoUsuarioComponent implements OnInit {
  tipo = "password";

  listamaestro:string[]=["0","1"];
  listat:string[]=["PE","UDS","ADMINISTRADOR"];
  listar:string[]=["1","2","3","4","5","6","7","8","9","10"];
  public doc: Tipodocumento[] = [];
  public rol: Rol[] = [];
  public pe: Puntoentrega[] = [];
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

  this.Service.getPunto()
	.subscribe(res => {
	  this.pe = res;
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
      title: 'Creado',
      text: 'Usuario creado',
      type: 'success',
	  confirmButtonText: 'Entendido'
	}).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/usuariosv1']);
  
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

  ver(){

    if(this.tipo == "password"){

      this.tipo = "text";

    }else{

      this.tipo = "password";

    }


  }

}




