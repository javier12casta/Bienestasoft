import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarlistamaestros',
  templateUrl: './modificarlistamaestros.component.html',
  styleUrls: ['./modificarlistamaestros.component.css']



})
export class ModificarlistamaestrosComponent implements OnInit {

  modalidads = '';


  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

  onClickMe() {
    
  if(this.modalidads == "Servicios y modalidades"){

    this.router.navigate(['/modificarserviciom']);

  }

  if(this.modalidads == "Referencias de bienestarina"){

    this.router.navigate(['/modificarreferenciab']);

  }

  if(this.modalidads == "Lista de precios"){

    this.router.navigate(['/modificarlistac']);

  }

  if(this.modalidads == "Listado de cursos"){

    this.router.navigate(['/modificarlistadoc']);

  }

  if(this.modalidads == "Datos Nutricionales"){

    this.router.navigate(['/modificardatosnutricionales']);

  }


    
  
    }

}
