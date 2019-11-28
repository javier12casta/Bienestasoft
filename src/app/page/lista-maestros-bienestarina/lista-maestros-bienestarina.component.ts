import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-maestros-bienestarina',
  templateUrl: './lista-maestros-bienestarina.component.html',
  styleUrls: ['./lista-maestros-bienestarina.component.css']

})
export class ListaMaestrosBienestarinaComponent implements OnInit {

  lista = '';
  listar:string[]=["Servicio y Modalidades","Referencias de Bienestarina","Lista de Precios","Listado De Cursos","Datos Nutricionales"];


  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {


  }

  clickMessage = '';

  onClickMe() {

  if(this.lista == 'Servicio y Modalidades'){

    this.router.navigate(['/serviciosymodalidadesv']);
	
  }

  if(this.lista == 'Referencias de Bienestarina'){

    this.router.navigate(['/referenciasbienestarinav']);
    
  }

  if(this.lista == 'Lista de Precios'){

    this.router.navigate(['/listapreciosv']);
    
  }

  if(this.lista == 'Listado De Cursos'){

    this.router.navigate(['/listadocursosv']);
    
  }


  if(this.lista == 'Datos Nutricionales' || this.lista == 'numero de cupos' ){

    this.router.navigate(['/datosvariosv']);
    
  }

  }
}
