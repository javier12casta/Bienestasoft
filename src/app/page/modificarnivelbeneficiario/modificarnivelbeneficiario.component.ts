import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarnivelbeneficiario',
  templateUrl: './modificarnivelbeneficiario.component.html',
  styleUrls: ['./modificarnivelbeneficiario.component.css']
})
export class ModificarnivelbeneficiarioComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
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

    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/ModificarBeneficiario1']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/modificarbeneficiariosp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/modificarbeneficiariosu']);
      
    }
  
  

  }


}
