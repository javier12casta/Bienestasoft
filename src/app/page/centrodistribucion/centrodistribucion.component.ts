import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-centrodistribucion',
  templateUrl: './centrodistribucion.component.html',
  styleUrls: ['./centrodistribucion.component.css']
})
export class CentrodistribucionComponent implements OnInit {
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

      this.router.navigate(['/centrodistribucionc']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/centrodistribucionp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/centrodistribucionu']);
      
    }
  }

}
