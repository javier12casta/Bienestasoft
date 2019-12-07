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
