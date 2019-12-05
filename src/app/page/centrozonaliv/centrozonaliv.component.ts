import { Component, OnInit } from '@angular/core';
import { Centrozonal } from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { Regional } from '../../interfaces/regional';
import { Centrozonalt } from 'src/app/interfaces/centrozonalt';

@Component({
  selector: 'app-centrozonaliv',
  templateUrl: './centrozonaliv.component.html',
  styleUrls: ['./centrozonaliv.component.css']
})
export class CentrozonalivComponent implements OnInit {
  centros: Centrozonalt[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentroTabla()
      .subscribe(async (data) => {
        this.centros = data;
        console.log('Info',this.centros);
        console.log('funciona');
      }
      );

  }

}
