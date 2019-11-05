import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  lista = '';
  listar:string[]=["servicio y modalidades","Referencias de Bienestarina","Lista de precios","Listado de cursos","Datos nutricionales"];


  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {
  }

  clickMessage = '';

  onClickMe() {

  if(this.lista == 'servicio y modalidades'){

    this.router.navigate(['/reporteserviciosymodalidades']);
	
  }

  if(this.lista == 'Referencias de Bienestarina'){

    this.router.navigate(['/reportereferenciabienestarina']);
    
  }

  if(this.lista == 'Lista de precios'){

    this.router.navigate(['/reportepreciosbienestarina']);
    
  }

  if(this.lista == 'Listado de cursos'){

    this.router.navigate(['/reportelistadocursos']);
    
  }


  if(this.lista == 'Datos nutricionales' || this.lista == 'numero de cupos' ){

    this.router.navigate(['/reportedatosnutricionales']);
    
  }

}
}
