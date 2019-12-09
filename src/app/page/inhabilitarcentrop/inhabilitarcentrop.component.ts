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
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
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
