import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarnivelbeneficiario',
  templateUrl: './modificarnivelbeneficiario.component.html',
  styleUrls: ['./modificarnivelbeneficiario.component.css']
})
export class ModificarnivelbeneficiarioComponent implements OnInit {

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

      this.router.navigate(['/ModificarBeneficiario1']);
    
    }
  
    if(this.listau == 'Punto de entrega'){
  
      this.router.navigate(['/modificarbeneficiariosp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/modificarbeneficiariosu']);
      
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
