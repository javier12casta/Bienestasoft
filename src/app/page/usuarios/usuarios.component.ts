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
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
  datosgenerales: string[];
  seleccionado='';
  resultado='';
  constructor() 
  {
  }

  ngOnInit() {
  }

  clickMessage='';
 

  siguiente(){

  this.clickMessage = 'funciona';
  this.resultado = this.seleccionado ;
  
  

  }

  


}
