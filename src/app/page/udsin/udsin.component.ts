import { Component, OnInit } from '@angular/core';
import { Uds } from 'src/app/interfaces/uds';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-udsin',
  templateUrl: './udsin.component.html',
  styleUrls: ['./udsin.component.css']
})
export class UdsinComponent implements OnInit {

  unidad: Uds []= [];
  
  constructor(
    private Service: ServicioService,

  ) { }

  async ngOnInit() {
    await this.Service.getUds()
    .subscribe( async (res)=> {
      this.unidad = res
    }, err => {
      console.log(err);
    });
  }

}
