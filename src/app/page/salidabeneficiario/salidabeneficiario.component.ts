import { Component, OnInit } from '@angular/core';
import { Salidabeneficiario} from '../../interfaces/salidabeneficiario';
import { ServicioService } from '../../servicio.service';
import { Salidabeneficiariot } from 'src/app/interfaces/salidabeneficiariot';

@Component({
  selector: 'app-salidabeneficiario',
  templateUrl: './salidabeneficiario.component.html',
  styleUrls: ['./salidabeneficiario.component.css']
})
export class SalidabeneficiarioComponent implements OnInit {

  centroB: Salidabeneficiariot[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidabeneficiarioTabla()
    .subscribe( (data) => {
      this.centroB = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
