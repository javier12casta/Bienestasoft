import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Almacent} from '../../interfaces/almacent';

@Component({
  selector: 'app-almacenu',
  templateUrl: './almacenu.component.html',
  styleUrls: ['./almacenu.component.css']
})
export class AlmacenuComponent implements OnInit {

  alm:Almacent[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenu()
      .subscribe(async (data) => {
        this.alm = data;
        console.log(data);
      }
      );

  }

}
