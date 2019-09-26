import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-puntoentrega',
  templateUrl: './puntoentrega.component.html',
  styleUrls: ['./puntoentrega.component.css']
})
export class PuntoentregaComponent implements OnInit {
  punto: Puntoentrega []=[];
  constructor(private Service: ServicioService) { }

  //consultar Datos
  async ngOnInit() {

    this.Service.getPunto()
      .subscribe(async (data) => {
        this.punto = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }
}
