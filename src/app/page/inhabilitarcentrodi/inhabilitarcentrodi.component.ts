import { Component, OnInit } from '@angular/core';
import { Centrodistribucion} from '../../interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-inhabilitarcentrodi',
  templateUrl: './inhabilitarcentrodi.component.html',
  styleUrls: ['./inhabilitarcentrodi.component.css']
})
export class InhabilitarcentrodiComponent implements OnInit {
  centrodt: Centrodistribucion[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getcentrodistribucion()
    .subscribe(async (data) => {
      this.centrodt = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
