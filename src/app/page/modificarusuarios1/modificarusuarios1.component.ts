import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuarios1',
  templateUrl: './modificarusuarios1.component.html',
  styleUrls: ['./modificarusuarios1.component.css'],
  
  
})
export class Modificarusuarios1Component implements OnInit {

  usua: Usuarios[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuarios()
    .subscribe(async (data) => {
      this.usua = data;
      console.log(data);
      
    }
    );

  }

}
