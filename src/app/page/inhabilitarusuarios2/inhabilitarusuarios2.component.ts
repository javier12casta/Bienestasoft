import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarusuarios2',
  templateUrl: './inhabilitarusuarios2.component.html',
  styleUrls: ['./inhabilitarusuarios2.component.css']
})
export class Inhabilitarusuarios2Component implements OnInit {

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
