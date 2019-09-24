import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import {Router} from '@angular/router'
import { Regional } from 'src/app/interfaces/regional';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datosgenerales: string[];
 

  constructor() 
  {
  }

  ngOnInit() {
  }

  DatosGeneralesUsuario(){

  var x = document.getElementById('inputnumerodoc');
  console.log(x);
  
  }

  


}
