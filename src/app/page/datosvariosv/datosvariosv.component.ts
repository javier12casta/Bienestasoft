import { Component, OnInit } from '@angular/core';
import { Datosvariost } from 'src/app/interfaces/datosvariost';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-datosvariosv',
  templateUrl: './datosvariosv.component.html',
  styleUrls: ['./datosvariosv.component.css']
})
export class DatosvariosvComponent implements OnInit {

  servic: Datosvariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getdatosvariosc()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
