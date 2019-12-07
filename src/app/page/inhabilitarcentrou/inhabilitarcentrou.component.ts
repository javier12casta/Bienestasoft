import { Component, OnInit } from '@angular/core';
import { Centrodistribuciont} from '../../interfaces/centrodistribuciont';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarcentrou',
  templateUrl: './inhabilitarcentrou.component.html',
  styleUrls: ['./inhabilitarcentrou.component.css']
})
export class InhabilitarcentrouComponent implements OnInit {

  centrodt: Centrodistribuciont[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionu()
      .subscribe(async (data) => {
        this.centrodt = data;
        console.log(data);
      }
      );

  }
}
