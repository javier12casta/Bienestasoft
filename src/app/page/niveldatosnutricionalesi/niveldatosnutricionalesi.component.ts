import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveldatosnutricionalesi',
  templateUrl: './niveldatosnutricionalesi.component.html',
  styleUrls: ['./niveldatosnutricionalesi.component.css']
})
export class NiveldatosnutricionalesiComponent implements OnInit {

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

      this.router.navigate(['/inhabilitardatosnutricionales']);
    
    }
  
    if(this.listau == 'Punto de entrega'){
  
      this.router.navigate(['/idatosnutricionalesp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/idatosnutricionalesu']);
      
    }
  
  

  }


}
