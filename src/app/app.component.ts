import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from './servicio.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienestasoft';
  router: Router;
  service: ServicioService;
  loginForm: FormGroup;

  user = {
    name:'admin123',
    pw:'admin123'
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

  

  loginUser(){
   
    this.service.login(this.user.name, this.user.pw).then (success =>{
      if (success) {
        this.router.navigateByUrl('/entrega');
      }else{
        
      } 
    });

  }


}
