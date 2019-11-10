import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';

@Component({
  selector: 'app-puntoentregain',
  templateUrl: './puntoentregain.component.html',
  styleUrls: ['./puntoentregain.component.css']
})
export class PuntoentregainComponent implements OnInit {
  punto: Puntoentrega [] = [];
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
  }
}
