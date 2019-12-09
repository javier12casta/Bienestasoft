import { Component, OnInit } from '@angular/core';
import { Lprecios } from 'src/app/interfaces/listaprecios';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-listapreciosv',
  templateUrl: './listapreciosv.component.html',
  styleUrls: ['./listapreciosv.component.css']
})
export class ListapreciosvComponent implements OnInit {

  servic: Lprecios[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {


    this.Service.getListaprecios()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
