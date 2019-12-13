import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivelistadocursosm',
  templateUrl: './nivelistadocursosm.component.html',
  styleUrls: ['./nivelistadocursosm.component.css']
})
export class NivelistadocursosmComponent implements OnInit {

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

      this.router.navigate(['/modificarlistadoc']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/modificarlistadocursosp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/modificarlistadocursosu']);
      
    }
  
  

  }

}