import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import {Puntoentregat } from '../../interfaces/puntoentregat';

@Component({
  selector: 'app-puntoentregain',
  templateUrl: './puntoentregain.component.html',
  styleUrls: ['./puntoentregain.component.css']
})
export class PuntoentregainComponent implements OnInit {
  punto: Puntoentrega [] = [];
  puntot: Puntoentregat [] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
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
