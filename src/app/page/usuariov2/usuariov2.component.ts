import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-usuariov2',
  templateUrl: './usuariov2.component.html',
  styleUrls: ['./usuariov2.component.css']
})
export class Usuariov2Component implements OnInit {

  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
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
