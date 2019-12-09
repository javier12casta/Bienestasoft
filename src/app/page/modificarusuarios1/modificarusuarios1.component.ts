import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuarios1',
  templateUrl: './modificarusuarios1.component.html',
  styleUrls: ['./modificarusuarios1.component.css'],
})
export class Modificarusuarios1Component implements OnInit {

  usua: Usuariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuariosc()
      .subscribe(async (data) => {
        this.usua = data;
        console.log(data);
      }
      );

  }

}
