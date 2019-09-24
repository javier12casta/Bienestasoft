import { Component, OnInit } from '@angular/core';
import { Centrozonal } from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';

import { Regional } from '../../interfaces/regional';

@Component({
  selector: 'app-centrozonal',
  templateUrl: './centrozonal.component.html',
  styleUrls: ['./centrozonal.component.css']
})
export class CentrozonalComponent implements OnInit {
  centros: Centrozonal[] = [];
  regional: Regional = {
    idRegional: 0,
    Regional: '',
  };

  constructor(private Service: ServicioService) { }

  //consultar Datos
  async ngOnInit() {

    this.Service.getCentro()
      .subscribe(async (data) => {
        this.centros = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }
}
