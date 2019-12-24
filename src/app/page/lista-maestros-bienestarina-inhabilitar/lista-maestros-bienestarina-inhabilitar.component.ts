import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-maestros-bienestarina-inhabilitar',
  templateUrl: './lista-maestros-bienestarina-inhabilitar.component.html',
  styleUrls: ['./lista-maestros-bienestarina-inhabilitar.component.css']
})
export class ListaMaestrosBienestarinaInhabilitarComponent implements OnInit {

  modalidads = '';

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

  onClickMe() {
    
    if(this.modalidads == "Servicios y modalidades"){
  
      this.router.navigate(['/inhabilitarserviciom']);
  
    }
  
    if(this.modalidads == "Referencias de bienestarina"){
  
      this.router.navigate(['/inhabilitareferenciab']);
  
    }
  
    if(this.modalidads == "Lista de precios"){
  
      this.router.navigate(['/inhabilitarelistap']);
  
    }
  
    if(this.modalidads == "Listado de cursos"){
  
      this.router.navigate(['/nivelistadocursosi']);
  
    }

    if(this.modalidads == "Datos Nutricionales"){
  
      this.router.navigate(['/niveldatosnutricionalesi']);
  
    }

    if(this.modalidads == ''){
  
      this.showMenssagenull();
        
      }
}

showMenssagenull() {
  Swal.fire({
    title: 'Error',
    text: 'Seleccione un nivel',
    type: 'warning',
    confirmButtonText: 'Entendido'
  });
}
}







  