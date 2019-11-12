import { Component, OnInit } from '@angular/core';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { ServicioService } from 'src/app/servicio.service';
import { Acudientes } from 'src/app/interfaces/acudiente';
import Swal from 'sweetalert2';
import { Regional } from '../../interfaces/regional';
import { Genero } from '../../interfaces/genero';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-datos-generales-beneficiario',
  templateUrl: './datos-generales-beneficiario.component.html',
  styleUrls: ['./datos-generales-beneficiario.component.css']


})
export class DatosGeneralesBeneficiarioComponent implements OnInit {

  public reg: Regional[] = [];
  public gen: Genero[] = [];
 

  x : Beneficiario = {

    NumeroDocumento : 0,
    FechaIngreso : 0 ,
    FechaNacimiento:0 ,
    PrimerNombre : '',
    PrimerApellido: '',
    SegundoNombre : '',
    Direccion : '',
    Pais : '',
    Municipio : '',
    TelefonoFijo : 0 ,
    TelefonoFijo2 : 0 ,
    TelefonoMovil : '' ,
    TelefonoMovil2 : '' ,
    Email : '',
    Estado : 1,
    idGenero: 0,
    idTipoDocumento: 0,
    SegundoApellido: '',
    ServicioOmodalidad : '',
    Departamento : '',

  };

  y : Acudientes = {

    NumeroDocumento : 0,
    Nombres : '',
    Apellidos : '',
    Parentesco : '',
    idGenero : 0,
    idTipoDocumento : 0,
    FechaNacimiento : 0,
    FechaIngreso : 0,
    RegistroBiometrico :'',

  };

  showMenssage(){

    Swal.fire({
      title: 'Creado!',
      text: 'Beneficiario Creado',
      type: 'success',
      confirmButtonText: 'Ok'
       }).then((result) => {
        if (result.value) {
          
          this.router.navigate(['/beneficiariosm']);

        }

    });
  }



  onClickMe() {

   
    this.Service.postBeneficiarios(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

      this.Service.postAcudientes(this.y).subscribe(res => {
        console.log(this.y);
        },
        err => {
          console.log(err);
        });


  }
  constructor(private Service: ServicioService, private router:Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
 //traer regionales -----------------------------------------
 this.Service.getRegional()
 .subscribe(res => {
   this.reg= res;
 }, err => {
   console.log(err);
 });


 this.Service.getgenero()
 .subscribe(res => {
   this.gen= res;
 }, err => {
   console.log(err);
 });


 

  }



}
