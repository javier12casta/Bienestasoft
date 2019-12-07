import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarusuarios3',
  templateUrl: './inhabilitarusuarios3.component.html',
  styleUrls: ['./inhabilitarusuarios3.component.css']
})
export class Inhabilitarusuarios3Component implements OnInit {

  usua: Usuariost[] = [];

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
