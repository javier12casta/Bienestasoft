import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Listadocursos } from 'src/app/interfaces/listadocursos';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { Genero } from 'src/app/interfaces/genero';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';

@Component({
  selector: 'app-listadocursospi',
  templateUrl: './listadocursospi.component.html',
  styleUrls: ['./listadocursospi.component.css']
})
export class ListadocursospiComponent implements OnInit {

  
  listamaestro:string[]=["0","1"];
  public gen: Genero[] = [];
  public tip: Tipodocumento[] = [];
  public cen1: Puntoentrega[] = [];
  public ben: Beneficiario[] = [];

  x : Listadocursos = {
    
    NombreAgenteE :'',
    NumeroDocumento : '',
    Fecha : 0,
    Estado : 0,
    idTipoDocumento : 0,
    idBenefiarios : 0,
    idPuntoEntrega : 0,
 

  };

  y : Beneficiario = {
    
    NumeroDocumento : 0,
    FechaIngreso : 0 ,
    FechaNacimiento: 0 ,
    PrimerNombre : '',
    PrimerApellido: '',
    SegundoNombre : '',
    Direccion : '',
    Pais : '',
    Departamento : '',
    Municipio : '',
    TelefonoFijo : 0 ,
    TelefonoFijo2 : 0 ,
    TelefonoMovil : '',
    TelefonoMovil2 : '' ,
    Email : '',
    Estado : 1,
    idGenero: 0,
    idTipoDocumento: 0,
    SegundoApellido: '',
    ServicioOmodalidad : '',
  
  };
  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {

	this.Service.getgenero()
	.subscribe(res => {
	  this.gen = res;
	}, err => {
	  console.log(err);
	});

	this.Service.gettipodocumento()
	.subscribe(res => {
	  this.tip = res;
	}, err => {
	  console.log(err);
  });
  
  this.Service.getBeneficiarios()
	.subscribe(res => {
	  this.ben = res;
	}, err => {
	  console.log(err);
  });
  
  this.Service.getPunto()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
	  confirmButtonText: 'Entendido'
	}).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/listadocursosp']);
	  
		}
    });
  }

  onClickMe() {
    
    

   
    this.Service.postlistadocursos(this.x).subscribe(res => {
	 console.log(this.x);
	 this.showMenssage();
     },
     err => {
       console.log(err);
     });
    
   }


}
