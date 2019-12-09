import { Component, OnInit } from '@angular/core';
import { Salidaconsumo} from '../../interfaces/salidaconsumo';
import { ServicioService } from '../../servicio.service';
import { Salidaconsumot } from 'src/app/interfaces/salidaconsumot';

@Component({
  selector: 'app-salidaconsumo',
  templateUrl: './salidaconsumo.component.html',
  styleUrls: ['./salidaconsumo.component.css']
})
export class SalidaconsumoComponent implements OnInit {

  centroC: Salidaconsumot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidaconsumoTabla()
    .subscribe( (data) => {
      this.centroC = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );
  }

}
