import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../interfaces/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Bienestasoft';
  loginForm: FormGroup;


  user = {
    name:'',
    pw: null,
  };

  error_messages={
    'password': [
      {type: 'reqired', message: 'Se requiere contraseña' },
      {type: 'minlength', message:'Debe contener al menos 8 caracteres.'},
      {type: 'maxlength', message:'Debe contener menos de 30 caracteres.'},
      {type: 'pattern', message: 'La contraseña debe contener numeros, mayusculas o minusculas'}
    ],
    'usuario': [
      {type: 'reqired', message: 'Se requiere nombre de usuario' },
      {type: 'minlength', message:'Debe contener al menos 8 caracteres.'},
      {type: 'maxlength', message:'Debe contener menos de 20 caracteres.'},
      {type: 'pattern', message: 'El nombre de usuario debe contener numeros, mayusculas o minusculas'}
    ],
  }



  constructor(private Service: ServicioService , private router:Router) { }
  users: Usuarios [] = [];
  ngOnInit() {
    this.Service.getUsuarios().subscribe(res => {
      this.users = res;
    });

  }

  login(){
    for(let usu of this.users){
      if(this.user.name == usu.NombreUsuarioSistema && this.user.pw == usu.NumeroDocumento){
        console.log('inicio session  exitoso');
         this.router.navigate(['/menu']); 
      }
    }

  }


}
