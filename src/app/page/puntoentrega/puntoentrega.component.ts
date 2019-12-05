import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import {Puntoentregat } from '../../interfaces/puntoentregat';

@Component({
  selector: 'app-puntoentrega',
  templateUrl: './puntoentrega.component.html',
  styleUrls: ['./puntoentrega.component.css']
})
export class PuntoentregaComponent implements OnInit {
  punto: Puntoentrega [] = [];
  puntot: Puntoentregat [] = [];
  constructor(
   private service: ServicioService 
  ) { }

  ngOnInit() {
    this.service.getPunto()
    .subscribe(res => {
      this.punto = res;
    }, err => {
      console.log(err);
    });

  this.service.getPuntoTabla()
  .subscribe(res => {
    this.puntot = res;
  }, err => {
    console.log(err);
  });

  }

  


}
