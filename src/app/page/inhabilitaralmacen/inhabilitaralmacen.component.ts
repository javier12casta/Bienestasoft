import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitaralmacen',
  templateUrl: './inhabilitaralmacen.component.html',
  styleUrls: ['./inhabilitaralmacen.component.css']
})
export class InhabilitaralmacenComponent implements OnInit {

 
  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];
 
  onClickMe() {
  

    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/inhabilitaralmaceni']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/inhabilitaralmacenp']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/inhabilitaralmacenu']);
      
    }


    }

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
