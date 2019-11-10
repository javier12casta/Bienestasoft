import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Regional } from 'src/app/interfaces/regional';

@Component({
  selector: 'app-centrozonalin',
  templateUrl: './centrozonalin.component.html',
  styleUrls: ['./centrozonalin.component.css']
})
export class CentrozonalinComponent implements OnInit {
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
