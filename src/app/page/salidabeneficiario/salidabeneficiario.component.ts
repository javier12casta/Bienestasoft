import { Component, OnInit } from '@angular/core';
import { Salidabeneficiario} from '../../interfaces/salidabeneficiario';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-salidabeneficiario',
  templateUrl: './salidabeneficiario.component.html',
  styleUrls: ['./salidabeneficiario.component.css']
})
export class SalidabeneficiarioComponent implements OnInit {

  centroB: Salidabeneficiario[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidabeneficiario()
    .subscribe( (data) => {
      this.centroB = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
