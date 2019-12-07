import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificarcentrop',
  templateUrl: './modificarcentrop.component.html',
  styleUrls: ['./modificarcentrop.component.css']
})
export class ModificarcentropComponent implements OnInit {

  cen: Centrodistribucion[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionp()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
      }
      );



  }

}
