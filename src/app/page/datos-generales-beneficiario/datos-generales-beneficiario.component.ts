import { Component, OnInit } from '@angular/core';
import { Beneficiario, Id } from 'src/app/interfaces/beneficiario';
import { ServicioService } from 'src/app/servicio.service';
import { Acudientes } from 'src/app/interfaces/acudiente';
import Swal from 'sweetalert2';
import { Regional } from '../../interfaces/regional';
import { Genero } from '../../interfaces/genero';
import { Centrozonal } from '../../interfaces/centrozonal';
import { ActivatedRoute, Router } from '@angular/router';
import { Biometrico, Validacion } from 'src/app/interfaces/biometrico';
import { delay } from 'q';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';

@Component({
  selector: 'app-datos-generales-beneficiario',
  templateUrl: './datos-generales-beneficiario.component.html',
  styleUrls: ['./datos-generales-beneficiario.component.css']


})
export class DatosGeneralesBeneficiarioComponent implements OnInit {

  public reg: Regional[] = [];
  public gen: Genero[] = [];
  public cen: Centrozonal[] = [];
  ser: MaestroBienestarina[] = [];
  public doc: Tipodocumento[] = [];


  x: Beneficiario = {
    NumeroDocumento: null,
    FechaIngreso: null,
    FechaNacimiento: null,
    PrimerNombre: '',
    PrimerApellido: '',
    SegundoNombre: '',
    Direccion: '',
    Pais: '',
    Municipio: '',
    TelefonoFijo: null,
    TelefonoFijo2: null,
    TelefonoMovil: '',
    TelefonoMovil2: '',
    Email: '',
    Estado: 1,
    idGenero: null,
    idTipoDocumento: null,
    SegundoApellido: '',
    ServicioOmodalidad: '',
    Departamento: '',
    idUDS: null,
    idCentrosZonales: null,
    idPuntoEntrega: null,

  };

  y: Acudientes = {

    NumeroDocumento: null,
    Nombres: '',
    Apellidos: '',
    Parentesco: '',
    idGenero: null,
    idTipoDocumento: null,
    FechaNacimiento: null,
    FechaIngreso: null,
    RegistroBiometrico: '',
    RegistroBiometrico1: '',
    idBeneficiarios: null,
  };

  idbene: Id = {
    id: null,
  };
  idmax = 0;
  bio: Biometrico = {
    Huella1: '',
    Huella2: '',
  };

  traerhuellas(){
    this.Service.ObtenerHuellas().subscribe(res => {
      this.bio = Object(res);
      console.log(this.bio.Huella1);
     // let bytes2 = new TextEncoder().encode(str);
      this.y.RegistroBiometrico = this.bio.Huella1;
      this.y.RegistroBiometrico1 =this.bio.Huella2;
      console.log(this.y.RegistroBiometrico);
      console.log(this.y.RegistroBiometrico1);
      
    });
    
  }
  
  showMenssage() {

    Swal.fire({
      title: 'Creado',
      text: 'Beneficiario Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
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
  constructor(
    private Service: ServicioService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  //----Validaciones de campos
  beForm: FormGroup;
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.beForm.valid) {
      this.onClickMe();
    } else if (this.beForm.invalid) {
      this.showMenssagenull();
    }
    // display form values on success
    console.log('Formulario', this.beForm.value);
  }

  ngOnInit() {
  
    //traer regionales -----------------------------------------
    this.Service.getRegional()
      .subscribe(res => {
        this.reg = res;
      }, err => {
        console.log(err);
      });
    //traer id ultimo beneficiarios
    this.Service.getBeneficiariosMaxId()
      .subscribe(res => {
        this.idbene = Object(res);
        console.log('idbeneficiario', this.idbene);
        console.log('idbeneficiario', this.idbene[0]["id"]);
        this.idmax = this.idbene[0]["id"];
        console.log('idbeneficiario numero', this.idmax);
        this.y.idBeneficiarios = this.idmax + 1;
        console.log('idbeneficiario y numero', this.y.idBeneficiarios);

      }, err => {
        console.log(err);
      });

    this.Service.getgenero()
      .subscribe(res => {
        this.gen = res;
      }, err => {
        console.log(err);
      });

    this.Service.getCentro()
      .subscribe(res => {
        this.cen = res;
      }, err => {
        console.log(err);
      });

    this.Service.gettipodocumento()
      .subscribe(res => {
        this.doc = res;
      }, err => {
        console.log(err);
      });

    this.Service.getMaestrosBienestrina().subscribe(res => {
      this.ser = res;
      console.log('Modalidad', this.ser);
    }, err => {
      console.log(err);
    });

    this.beForm = this.fb.group({
      idCentrosZonales: ['', Validators.required],
      Estado: ['', Validators.required],
      idTipoDocumento: ['', Validators.required],
      Departamento: ['', Validators.required],
      Parentesco: ['', Validators.required],
      RegistroBiometrico: ['', Validators.required],
      RegistroBiometrico1: ['', Validators.required],
      NumeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      PrimerNombre: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Pais: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Municipio: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      PrimerApellido: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      SegundoNombre: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      SegundoApellido: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      idGenero: ['', Validators.required],
      Nombres: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Apellidos: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      FechaIngreso: ['', [Validators.required]],
      FechaNacimiento: ['', [Validators.required]],
      ServicioOmodalidad: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú\(\)]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      TelefonoFijo: ['', [Validators.required, Validators.minLength(7), Validators.pattern('^[0-9]*$')]],
      TelefonoFijo2: ['', [Validators.minLength(7), Validators.pattern('^[0-9]*$')]],
      TelefonoMovil: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      TelefonoMovil2: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*$')]],
    });

  }

  get f() { return this.beForm.controls; }

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}

