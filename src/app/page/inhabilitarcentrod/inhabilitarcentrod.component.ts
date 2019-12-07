import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitarcentrod',
  templateUrl: './inhabilitarcentrod.component.html',
  styleUrls: ['./inhabilitarcentrod.component.css']
})
export class InhabilitarcentrodComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
 
  onClickMe() {
  

    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/inhabilitarcentroi']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/inhabilitarcentrop']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/inhabilitaru']);
      
    }


    }

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }
}
