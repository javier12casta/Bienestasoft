import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../interfaces/usuarios';
import { AuthserviceService } from '../authservice.service';
import { User } from '../interfaces/user';
import Swal from 'sweetalert2';
import { delay } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuarios = {
    idUsuarios: 1,
    Nombres: "",
    Apellidos: "",
    Estado: 1,
    NumeroDocumento: 0,
    FechaIngreso: 0,
    NombreUsuarioSistema: "",
    Direccion: "",
    TelefonoFijo: 0,
    TelefonoFijo2: 0,
    TelefonoMovil: 0,
    TelefonoMovil2: 0,
    Email: "",
    idPuntoEntrega: null,
    idUDS: null,
    idTipoDocumento: 1,
    TipoUsuario: "",
    password: ""
  }

  constructor(
    private Service: ServicioService,
    private router: Router,
    private auth: AuthserviceService,
    private fb: FormBuilder
  ) {

  }

  //----Validaciones de campos
  loginForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      this.login();
    }else{
      this.onReset();
    }

    // display form values on success
    console.log('Formulario', this.loginForm.value);
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú]*$')]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(20),Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú]*$')]],
    });
  }

  get f() { return this.loginForm.controls; }
//--------------------------------------------------------------------------------------------------

  usuario: User = {
    NombreUsuarioSistema: '',
    password: '',
  };

  login() {
    console.log('usuario',this.usuario.NombreUsuarioSistema);
    this.auth.getAuthUser(this.usuario.NombreUsuarioSistema).subscribe(res => {
      this.user = Object(res);
      
      delay(1000);
      this.validarLogin();
    }, err => {
      this.showMenssage2();
    });

  }

  validarLogin() {
    if (this.usuario.NombreUsuarioSistema == "" || this.usuario.password == "") {
      this.showMenssagelog();
      this.router.navigate(['/login']);
    } else if (this.usuario.NombreUsuarioSistema == this.user.NombreUsuarioSistema && this.usuario.password == this.user.password) {
      this.grabarStorage();
      this.router.navigate(['/menu']);
    } else {
      this.showMenssage2();
    }
  }

  grabarStorage() {
    let persona = this.user;
    localStorage.setItem("persona", JSON.stringify(persona));
  }

  showMenssage2() {
    Swal.fire({
      title: 'Error al iniciar sessión',
      text: 'Verifica tus credenciales',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssagelog() {
    Swal.fire({
      title: 'Campos vacios',
      text: 'Ingresa tus datos',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }


}
