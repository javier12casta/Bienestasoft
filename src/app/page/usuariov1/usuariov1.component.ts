import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-usuariov1',
  templateUrl: './usuariov1.component.html',
  styleUrls: ['./usuariov1.component.css']
})
export class Usuariov1Component implements OnInit {

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
