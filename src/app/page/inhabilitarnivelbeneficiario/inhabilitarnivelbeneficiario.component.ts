import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhabilitarnivelbeneficiario',
  templateUrl: './inhabilitarnivelbeneficiario.component.html',
  styleUrls: ['./inhabilitarnivelbeneficiario.component.css']
})
export class InhabilitarnivelbeneficiarioComponent implements OnInit {

 
  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];

  onClickMe() {
    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/InhabilitarBeneficiario1']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/inhabilitarbeneficiariosp']);
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/inhabilitarbeneficiariosu']);
      
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
