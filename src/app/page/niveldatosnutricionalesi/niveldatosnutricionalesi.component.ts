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
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
  datosgenerales: string[];
  seleccionado='';
  resultado='';

  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {
  }


  siguiente(){

    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/inhabilitardatosnutricionales']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/idatosnutricionalesp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/idatosnutricionalesu']);
      
    }
  
  

  }


}
