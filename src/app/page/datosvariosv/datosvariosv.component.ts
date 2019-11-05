import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-datosvariosv',
  templateUrl: './datosvariosv.component.html',
  styleUrls: ['./datosvariosv.component.css']
})
export class DatosvariosvComponent implements OnInit {

  servic: Datosvarios[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getdatosvarios()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
