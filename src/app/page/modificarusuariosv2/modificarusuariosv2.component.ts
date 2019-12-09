import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuariosv2',
  templateUrl: './modificarusuariosv2.component.html',
  styleUrls: ['./modificarusuariosv2.component.css']
})
export class Modificarusuariosv2Component implements OnInit {

  usua: Usuariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuariosp()
      .subscribe(async (data) => {
        this.usua = data;
        console.log(data);
      }
      );

  }

}
