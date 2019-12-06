import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificarusuarios',
  templateUrl: './modificarusuarios.component.html',
  styleUrls: ['./modificarusuarios.component.css']


})
export class ModificarusuariosComponent implements OnInit {

  listau = '';
  lista:string[]=["Centro Zonal","Punto De Entrega","Unidad de servicio"];

  onClickMe() {
    
    if(this.listau == 'Centro Zonal'){

      this.router.navigate(['/modificarusuarios1']);
    
    }
  
    if(this.listau == 'Punto De Entrega'){
  
      this.router.navigate(['modificarusuariov2']);
      
    }
  
    if(this.listau == 'Unidad de servicio'){
  
      this.router.navigate(['modificarusuariov3']);
      
    }


  

  }
  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
