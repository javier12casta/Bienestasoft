import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-niveldatosnutricionalesm',
  templateUrl: './niveldatosnutricionalesm.component.html',
  styleUrls: ['./niveldatosnutricionalesm.component.css']
})
export class NiveldatosnutricionalesmComponent implements OnInit {

  
  listau = '';
  lista:string[]=["Centro zonal","Punto de entrega","Unidad de servicio"];
  datosgenerales: string[];
  seleccionado='';
  resultado='';

  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {
  }


  siguiente(){

    if(this.listau == 'Centro zonal'){

      this.router.navigate(['/modificardatosnutricionales']);
    
    }
  
    if(this.listau == 'Punto de entrega'){
  
      this.router.navigate(['/modificardatosnutricionalesp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/modificardatosnutricionalesu']);
      
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
