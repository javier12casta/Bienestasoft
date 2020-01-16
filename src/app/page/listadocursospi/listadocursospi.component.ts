import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Listadocursos } from 'src/app/interfaces/listadocursos';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { Genero } from 'src/app/interfaces/genero';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    Estado : 1,
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
  constructor(
    private Service: ServicioService,
    private router:Router,
    private fb: FormBuilder) { }

  ngOnInit() {


    //Validador--------------------
    this.RefForm = this.fb.group({

      PUE: ['', Validators.required],
      agente: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Tipod: ['', Validators.required],
      Numdoc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Estado: ['', Validators.required],
      Numdocb: ['', Validators.required],
      pname: ['', Validators.required],
      fecha: ['', Validators.required]
      
    });

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

  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RefForm.valid) {
      
        this.onClickMe();
          
    } else if (this.RefForm.invalid) {
      this.showMenssagenull();
    }
  }
  
  onReset() {
    this.submitted = false;
    this.RefForm.reset();
  }

  get f() { return this.RefForm.controls; }  

  beneficiario = null;
  documento(){
    for(let b of this.ben){
      if(b.idBeneficiarios == this.x.idBenefiarios){
         this.beneficiario = b.idBeneficiarios;
      }

    }
  }
  
  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Listado curso creado',
      type: 'success',
	  confirmButtonText: 'Entendido'
	}).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/listadocursosp']);
	  
		}
    });
  }

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos inválidos',
      type: 'warning',
      confirmButtonText: 'Entendido'
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
