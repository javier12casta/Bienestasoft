import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitarusuarios',
  templateUrl: './inhabilitarusuarios.component.html',
  styleUrls: ['./inhabilitarusuarios.component.css']
})
export class InhabilitarusuariosComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];

  onClickMe() {
    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/inhabilitarusuarios1']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['/inhabilitarusuarios2']);
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['/inhabilitarusuarios3']);
      
    }


  

  }
  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
