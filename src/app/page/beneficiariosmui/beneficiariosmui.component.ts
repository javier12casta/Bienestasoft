import { Component, OnInit } from '@angular/core';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { ServicioService } from 'src/app/servicio.service';
import { Acudientes } from 'src/app/interfaces/acudiente';
import Swal from 'sweetalert2';
import { Regional } from '../../interfaces/regional';
import { Genero } from '../../interfaces/genero';
import { Uds } from '../../interfaces/uds';
import { ActivatedRoute, Router } from '@angular/router';
import { Biometrico } from 'src/app/interfaces/biometrico';
import { delay } from 'q';
import { Puntoentregat } from 'src/app/interfaces/puntoentregat';

@Component({
  selector: 'app-beneficiariosmui',
  templateUrl: './beneficiariosmui.component.html',
  styleUrls: ['./beneficiariosmui.component.css']
})
export class BeneficiariosmuiComponent implements OnInit {

 
  public reg: Regional[] = [];
  public gen: Genero[] = [];
  public ud: Uds[] = [];

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
    idUDS : null,

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

  bio: Biometrico = {
    Huella: '',
  };

  showMenssage(){

    Swal.fire({
      title: 'Creado',
      text: 'Beneficiario Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
       }).then((result) => {
        if (result.value) {
          
          this.router.navigate(['/beneficiariosmu']);

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
    this.Service.gethuella().subscribe(res => {
      this.y.RegistroBiometrico = JSON.stringify (res);
      console.log(this.y.RegistroBiometrico);
      delay(1000);
    }, err => {
      console.log(err);
    });
    this.y.RegistroBiometrico = this.bio.Huella;
    console.log(this.y.RegistroBiometrico);
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

 this.Service.getUds()
 .subscribe(res => {
   this.ud = res;
 }, err => {
   console.log(err);
 });

 

  }


}
