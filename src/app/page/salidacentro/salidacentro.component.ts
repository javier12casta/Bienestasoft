import { Component, OnInit } from '@angular/core';
import { Salidacentro} from '../../interfaces/salidacentro';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-salidacentro',
  templateUrl: './salidacentro.component.html',
  styleUrls: ['./salidacentro.component.css']
})
export class SalidacentroComponent implements OnInit {

  centroD: Salidacentro[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidacentro()
      .subscribe( (data) => {
        this.centroD = data;
        console.log(data);
        console.log('funciona');
      }
      );

  }

}
