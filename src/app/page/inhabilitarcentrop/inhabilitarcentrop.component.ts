import { Component, OnInit } from '@angular/core';
import { Centrodistribuciont} from '../../interfaces/centrodistribuciont';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarcentrop',
  templateUrl: './inhabilitarcentrop.component.html',
  styleUrls: ['./inhabilitarcentrop.component.css']
})
export class InhabilitarcentropComponent implements OnInit {

  centrodt: Centrodistribuciont[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionp()
      .subscribe(async (data) => {
        this.centrodt = data;
        console.log(data);
      }
      );


  }


}
