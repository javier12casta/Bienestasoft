import { Component, OnInit } from '@angular/core';
import { Centrozonal } from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';

import { Regional } from '../../interfaces/regional';

@Component({
  selector: 'app-modificarbeneficiarios1',
  templateUrl: './modificarbeneficiarios1.component.html',
  styleUrls: ['./modificarbeneficiarios1.component.css']
})
export class Modificarbeneficiarios1Component implements OnInit {
  centros: Centrozonal[] = [];
  regional: Regional = {
    idRegional: 0,
    Regional: '',
  };

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentro()
    .subscribe(async (data) => {
      this.centros = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
