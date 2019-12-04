import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Uds } from '../../interfaces/uds';
import { Udst} from '../../interfaces/udst';
import { async } from 'q';

@Component({
  selector: 'app-uds',
  templateUrl: './uds.component.html',
  styleUrls: ['./uds.component.css']
})
export class UdsComponent implements OnInit {

  unidad: Uds []= [];
  unidadt: Udst []= [];
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
