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
  clickMessage = '';
  
  constructor() {

this.datosgenerales = [];


   }

  ngOnInit() {
  }

  DatosGeneralesUsuario(){

    this.clickMessage = 'You are my hero!';

  }


}
