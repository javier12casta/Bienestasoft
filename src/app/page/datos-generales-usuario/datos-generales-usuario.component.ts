import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';
import { Rol } from 'src/app/interfaces/rol';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-generales-usuario',
  templateUrl: './datos-generales-usuario.component.html',
  styleUrls: ['./datos-generales-usuario.component.css']

})
export class DatosGeneralesUsuarioComponent implements OnInit {
  type = "password";
  listamaestro: string[] = ["0", "1"];
  listat: string[] = ["PE", "UDS", "ADMINISTRADOR"];
  listar: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  public doc: Tipodocumento[] = [];
  public rol: Rol[] = [];
  public cen: Centrozonal[] = [];
  public pe: Puntoentrega[] = [];
  public ud: Uds[] = [];
  habilitado = true;
  habilitado1 = true;
  habilitado2 = true;
  nivel;

  x: Usuarios = {

    Nombres: '',
    Apellidos: '',
    Estado: 1,
    NumeroDocumento: null,
    FechaIngreso: null,
    NombreUsuarioSistema: '',
    Direccion: '',
    TelefonoFijo: null,
    TelefonoFijo2: null,
    TelefonoMovil: null,
    TelefonoMovil2: null,
    Email: '',
    tipo: '',
    TipoUsuario: '',
    idTipoDocumento: null,
    password: '',
    idUDS: null,
    idCentrosZonales: null,
    idPuntoEntrega: null,

  };

  onClickMe() {

    if (this.x.NumeroDocumento == null || this.x.NumeroDocumento == 0 && this.x.TelefonoFijo == 0 && this.x.TelefonoFijo2 == null || this.x.TelefonoFijo2 == 0 && this.x.TelefonoMovil == null || this.x.TelefonoMovil == 0 && this.x.TelefonoMovil2 == null || this.x.TelefonoMovil2 == 0 && this.x.idTipoDocumento == null || this.x.idTipoDocumento == 0 || this.x.password == "" && this.x.Nombres == "") {

      this.showMenssage3();

    } else {

      this.Service.postUsuarios(this.x).subscribe(res => {
        console.log(this.x);
        this.showMenssage();
      },
        err => {
          console.log(err);
        });


    }



  }

  constructor(private Service: ServicioService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  //----Validaciones de campos
  usForm: FormGroup;
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.usForm.valid) {
      this.onClickMe();
    } else if (this.usForm.invalid) {
      this.showMenssagenull();
    }
    // display form values on success
    console.log('Formulario', this.usForm.value);
  }

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

    this.Service.getCentro()
      .subscribe(res => {
        this.cen = res;
      }, err => {
        console.log(err);
      });

    this.usForm = this.fb.group({
      idCentrosZonales: ['', Validators.required],
      Estado: ['', Validators.required],
      idTipoDocumento: ['', Validators.required],
      NumeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Nombres: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Apellidos: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      FechaIngreso: ['', [Validators.required]],
      NombreUsuarioSistema: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú]*$')]],
      tipo: ['', Validators.required],
      TipoUsuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      TelefonoFijo: ['', [Validators.required, Validators.minLength(7), Validators.pattern('^[0-9]*$')]],
      TelefonoFijo2: ['', [Validators.minLength(7),  Validators.pattern('^[0-9]*$')]],
      TelefonoMovil: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      TelefonoMovil2: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*$')]],
    });
  }

  get f() { return this.usForm.controls; }


  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Usuario creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/usuariosv']);

      }

    });
  }

  showMenssage3() {
    Swal.fire({
      title: 'Error!',
      text: 'campos erroneos o vacios',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

  ver() {

    if (this.type == "password") {

      this.type = "text";

    } else {

      this.type = "password";

    }


  }


  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}
