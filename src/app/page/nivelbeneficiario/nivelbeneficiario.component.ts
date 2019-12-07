import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivelbeneficiario',
  templateUrl: './nivelbeneficiario.component.html',
  styleUrls: ['./nivelbeneficiario.component.css']
})
export class NivelbeneficiarioComponent implements OnInit {

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

      this.router.navigate(['/beneficiariosm']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/beneficiariosmp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/beneficiariosmu']);
      
    }
  
  

  }

}
