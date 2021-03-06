import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificaralmacen',
  templateUrl: './modificaralmacen.component.html',
  styleUrls: ['./modificaralmacen.component.css']
})
export class ModificaralmacenComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro zonal","Punto de entrega","Unidad de servicio"];
 
  onClickMe() {
  

    if(this.listau == 'Centro zonal'){

      this.router.navigate(['/modificaralmaceni']);
    
    }
  
    if(this.listau == 'Punto de entrega'){
  
      this.router.navigate(['/modificaralmacenp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/modificaralmacenu']);
      
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










