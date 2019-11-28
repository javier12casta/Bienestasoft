import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Regional } from 'src/app/interfaces/regional';
import { Centrozonalt } from 'src/app/interfaces/centrozonalt';

@Component({
  selector: 'app-centrozonalin',
  templateUrl: './centrozonalin.component.html',
  styleUrls: ['./centrozonalin.component.css']
})
export class CentrozonalinComponent implements OnInit {
  centros: Centrozonalt[] = [];
  constructor(private Service: ServicioService) { }

  //consultar Datos
  async ngOnInit() {

    this.Service.getCentroTabla()
      .subscribe(async (data) => {
        this.centros = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }
}
