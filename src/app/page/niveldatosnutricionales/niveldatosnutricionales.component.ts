import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niveldatosnutricionales',
  templateUrl: './niveldatosnutricionales.component.html',
  styleUrls: ['./niveldatosnutricionales.component.css']
})
export class NiveldatosnutricionalesComponent implements OnInit {

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

      this.router.navigate(['/datosvariosv']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/']);
      
    }
  
  

  }


}