import { Component, OnInit } from '@angular/core';
import { Salidaconsumo} from '../../interfaces/salidaconsumo';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-salidaconsumo',
  templateUrl: './salidaconsumo.component.html',
  styleUrls: ['./salidaconsumo.component.css']
})
export class SalidaconsumoComponent implements OnInit {

  centroC: Salidaconsumo[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidaconsumo()
    .subscribe( (data) => {
      this.centroC = data;
      console.log(data);
      console.log('funciona');
    }
    );
  }

}
