import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modificarusuarios',
  templateUrl: './modificarusuarios.component.html',
  styleUrls: ['./modificarusuarios.component.css']


})
export class ModificarusuariosComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];

  onClickMe() {
    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/modificarusuarios1']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['modificarusuariov2']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['modificarusuariov3']);
      
    }

    if(this.listau == ''){
  
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
  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
