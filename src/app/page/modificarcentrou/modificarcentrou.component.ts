import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarcentrou',
  templateUrl: './modificarcentrou.component.html',
  styleUrls: ['./modificarcentrou.component.css']
})
export class ModificarcentrouComponent implements OnInit {

  cen: Centrodistribucion[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionu()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
      }
      );

  }

}
