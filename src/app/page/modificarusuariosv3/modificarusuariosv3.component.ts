import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarusuariosv3',
  templateUrl: './modificarusuariosv3.component.html',
  styleUrls: ['./modificarusuariosv3.component.css']
})
export class Modificarusuariosv3Component implements OnInit {

  usua: Usuariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuariosu()
    .subscribe(async (data) => {
      this.usua = data;
      console.log(data);
    }
    );

    
  }

}
