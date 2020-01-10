import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarnivelnumerocupos',
  templateUrl: './modificarnivelnumerocupos.component.html',
  styleUrls: ['./modificarnivelnumerocupos.component.css']
})
export class ModificarnivelnumerocuposComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
  datosgenerales: string[];
  seleccionado='';
  resultado='';

  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {
  }

  siguiente(){

    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/modificarnumerocuposc']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/modificarnumerocuposp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/modificarnumerocuposu']);
      
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
