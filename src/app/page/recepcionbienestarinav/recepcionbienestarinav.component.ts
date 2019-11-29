import { Component, OnInit } from '@angular/core';
import { Recepcion } from 'src/app/interfaces/recepcion';
import { ServicioService } from '../../servicio.service';
import { Recepciont } from 'src/app/interfaces/recepciont';


@Component({
  selector: 'app-recepcionbienestarinav',
  templateUrl: './recepcionbienestarinav.component.html',
  styleUrls: ['./recepcionbienestarinav.component.css']
})
export class RecepcionbienestarinavComponent implements OnInit {

  rec: Recepciont[] = [];


  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getrecepciontabla()
    .subscribe(async (data) => {
      this.rec = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
