import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhabilitarnivelnumerocupos',
  templateUrl: './inhabilitarnivelnumerocupos.component.html',
  styleUrls: ['./inhabilitarnivelnumerocupos.component.css']
})
export class InhabilitarnivelnumerocuposComponent implements OnInit {

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

      this.router.navigate(['/inhabilitarnumerocuposc']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/inhabilitarnumerocuposp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/inhabilitarnumerocuposu']);
      
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
