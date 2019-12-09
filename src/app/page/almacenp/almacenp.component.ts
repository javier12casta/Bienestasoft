import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Almacent} from '../../interfaces/almacent';

@Component({
  selector: 'app-almacenp',
  templateUrl: './almacenp.component.html',
  styleUrls: ['./almacenp.component.css']
})
export class AlmacenpComponent implements OnInit {

  alm:Almacent[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenp()
      .subscribe(async (data) => {
        this.alm = data;
        console.log(data);
      }
      );

  }

}
