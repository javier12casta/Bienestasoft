import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Centrozonal } from '../../interfaces/centrozonal';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Acudientes } from 'src/app/interfaces/acudiente';
import { Regional } from 'src/app/interfaces/regional';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import { Genero } from 'src/app/interfaces/genero';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarbeneficiariom',
  templateUrl: './modificarbeneficiariom.component.html',
  styleUrls: ['./modificarbeneficiariom.component.css']
})
export class ModificarbeneficiariomComponent implements OnInit {

  public beneficiarios: Beneficiario[] = [];
  public reg: Regional[] = [];
  public doc: Tipodocumento[] = [];
  public gen: Genero[] = [];
  ser: MaestroBienestarina[] = [];
  public cen: Centrozonal[] = [];

  constructor(
    private Service: ServicioService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

    x: Beneficiario = {

    idBeneficiarios: 1,
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
    idUDS : null,

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
      idBeneficiarios: null,
    };

      //----Validaciones de campos
  beForm: FormGroup;
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.beForm.valid) {
     this.updateDatos();
    } else if (this.beForm.invalid) {
      this.showMenssagenull();
    }
    // display form values on success
    console.log('Formulario', this.beForm.value);
  }

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getBeneficiariosid(params.id)
        .subscribe(res => {
          this.x = Object(res);
          console.log('Beneficiario',this.x);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getAcudientesid(params.id).subscribe(res => {
      this.y = Object(res);
      console.log('Acudiente',this.y);
    },err => {
      console.log(err);
    });

    this.Service.getCentro()
    .subscribe(async (data) => {
      this.cen = data;
      console.log(data);
      console.log('funciona');
    });

    this.Service.getRegional()
    .subscribe(res => {
      this.reg = res;
    }, err => {
      console.log(err);
    });

    this.Service.getgenero()
    .subscribe(res => {
      this.gen = res;
    }, err => {
      console.log(err);
    });

    this.Service.getMaestrosBienestrina().subscribe(res => {
      this.ser = res;
      console.log('Modalidad', this.ser);
    }, err => {
      console.log(err);
    });

    this.Service.gettipodocumento()
    .subscribe(res => {
      this.doc = res;
    }, err => {
      console.log(err);
    });

    this.beForm = this.fb.group({
      idCentrosZonales: ['', Validators.required],
      Estado: ['', Validators.required],
      idTipoDocumento: ['', Validators.required],
      idTipoDocumentoA: ['', Validators.required],
      Departamento: ['', Validators.required],
      Parentesco: ['', Validators.required],
      RegistroBiometrico: ['', Validators.required],
      NumeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      NumeroDocumentoA: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      PrimerNombre: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Pais: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Municipio: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      PrimerApellido: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      SegundoNombre: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      SegundoApellido: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      idGenero: ['', Validators.required],
      idGeneroA: ['', Validators.required],
      Nombres: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Apellidos: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      FechaIngreso: ['', [Validators.required]],
      FechaNacimiento: ['', [Validators.required]],
      FechaIngresoA: ['', [Validators.required]],
      FechaNacimientoA: ['', [Validators.required]],
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

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Beneficiario Modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/ModificarBeneficiario1']);

      }
    });
  }


  updateDatos() {

    this.Service.putAcudientes(this.y.idAcudientes, this.y).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
    this.Service.putBeneficiarios(this.x.idBeneficiarios, this.x)
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
