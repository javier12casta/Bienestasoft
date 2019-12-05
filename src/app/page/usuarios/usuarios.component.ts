import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']

})
export class UsuariosComponent implements OnInit {
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

      this.router.navigate(['/usuariosv']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/usuariosv1']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/usuariosv2']);
      
    }
  
  

  }

  


}
