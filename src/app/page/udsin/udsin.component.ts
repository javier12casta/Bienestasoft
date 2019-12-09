import { Component, OnInit } from '@angular/core';
import { Uds } from 'src/app/interfaces/uds';
import { ServicioService } from 'src/app/servicio.service';
import { Udst} from '../../interfaces/udst';

@Component({
  selector: 'app-udsin',
  templateUrl: './udsin.component.html',
  styleUrls: ['./udsin.component.css']
})
export class UdsinComponent implements OnInit {

  unidad: Uds []= [];
  unidadt: Udst []= [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
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

    this.Service.getUdsTabla()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

  }

}
