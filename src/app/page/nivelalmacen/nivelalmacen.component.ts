import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivelalmacen',
  templateUrl: './nivelalmacen.component.html',
  styleUrls: ['./nivelalmacen.component.css']
})
export class NivelalmacenComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
 
  onClickMe() {
  

    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/']);
      
    }


    }

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }
}
