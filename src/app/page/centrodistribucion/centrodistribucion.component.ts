import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-centrodistribucion',
  templateUrl: './centrodistribucion.component.html',
  styleUrls: ['./centrodistribucion.component.css']
})
export class CentrodistribucionComponent implements OnInit {
  listau = '';
  lista:string[]=["Centro zonal","Punto de entrega","Unidad de servicio"];
  datosgenerales: string[];
  seleccionado='';
  resultado='';
  
  constructor(private Service: ServicioService , private router:Router) 
  {
  }

  ngOnInit() {
  }

  clickMessage='';
 
  siguiente(){

    if(this.listau == 'Centro zonal'){

      this.router.navigate(['/centrodistribucionc']);
    
    }
  
    if(this.listau == 'Punto de entrega'){
  
      this.router.navigate(['/centrodistribucionp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/centrodistribucionu']);
      
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
}
