import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Acudientes } from 'src/app/interfaces/acudiente';
import { Regional } from 'src/app/interfaces/regional';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import { Genero } from 'src/app/interfaces/genero';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Biometrico } from 'src/app/interfaces/biometrico';

@Component({
  selector: 'app-modificar-beneficiariopi',
  templateUrl: './modificar-beneficiariopi.component.html',
  styleUrls: ['./modificar-beneficiariopi.component.css']
})
export class ModificarBeneficiariopiComponent implements OnInit {

  
  public beneficiarios: Beneficiario[] = [];
  public reg: Regional[] = [];
  public doc: Tipodocumento[] = [];
  public gen: Genero[] = [];
  ser: MaestroBienestarina[] = [];
  public ud: Puntoentrega[] = [];

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
    idPuntoEntrega: null,
    idCentrosZonales: null,
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
    bio: Biometrico = {
      Huella1: '',
      Huella2: '',
    };
    filter = false;
    filter1 = false;
    
    onFilterChange(e){
      var element = <HTMLInputElement> document.getElementById("check");
      var check = element.checked;
      if(check){
        //console.log('check 1');
        this.Service.ObtenerHuellas().subscribe(res => {
          this.bio = Object(res);
          console.log(this.bio.Huella1);
         // let bytes2 = new TextEncoder().encode(str);
          this.y.RegistroBiometrico = this.bio.Huella1;
          console.log(this.y.RegistroBiometrico);
          
        });
      }
    }
    onFilterChange1(e){
      var element = <HTMLInputElement> document.getElementById("check2");
      var check = element.checked;
      if(check){
        //console.log('check 2');
        this.Service.ObtenerHuellas().subscribe(res => {
          this.bio = Object(res);
          console.log(this.bio.Huella1);
         // let bytes2 = new TextEncoder().encode(str);
          this.y.RegistroBiometrico1 =this.bio.Huella2;
          console.log(this.y.RegistroBiometrico1);
          
        });
      }
    }

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
          console.log(res);
          this.x = Object(res);
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

    this.Service.getPunto()
    .subscribe(async (data) => {
      this.ud = data;
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
      idPuntoEntrega: ['', Validators.required],
      Estado: ['', Validators.required],
      idTipoDocumento: ['', Validators.required],
      idTipoDocumentoA: ['', Validators.required],
      Departamento: ['', Validators.required],
      Parentesco: ['', Validators.required],
      RegistroBiometrico: ['', Validators.required],
      RegistroBiometrico1: ['', Validators.required],
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
        
        this.router.navigate(['/modificarbeneficiariosp']);

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
