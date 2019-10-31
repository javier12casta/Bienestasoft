import { Component, OnInit } from '@angular/core';
import { Recepcion } from 'src/app/interfaces/recepcion';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-recepcionbienestarinav',
  templateUrl: './recepcionbienestarinav.component.html',
  styleUrls: ['./recepcionbienestarinav.component.css']
})
export class RecepcionbienestarinavComponent implements OnInit {

  rec: Recepcion[] = [];


  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getrecepcion()
    .subscribe(async (data) => {
      this.rec = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
