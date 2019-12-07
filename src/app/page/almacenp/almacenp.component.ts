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
