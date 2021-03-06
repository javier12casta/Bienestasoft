import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivelistadocursosi',
  templateUrl: './nivelistadocursosi.component.html',
  styleUrls: ['./nivelistadocursosi.component.css']
})
export class NivelistadocursosiComponent implements OnInit {

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

      this.router.navigate(['/inhabilitarelistadoc']);
    
    }
  
    if(this.listau == 'Punto de entrega'){
  
      this.router.navigate(['/ilistadocursosp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/ilistadocursosu']);
      
    }
  
  

  }


}
