import { Component, OnInit } from '@angular/core';
import { Centrodistribuciont} from '../../interfaces/centrodistribuciont';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-inhabilitarcentrodi',
  templateUrl: './inhabilitarcentrodi.component.html',
  styleUrls: ['./inhabilitarcentrodi.component.css']
})
export class InhabilitarcentrodiComponent implements OnInit {
  centrodt: Centrodistribuciont[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionc()
      .subscribe(async (data) => {
        this.centrodt = data;
        console.log(data);
      }
      );


  }

}
