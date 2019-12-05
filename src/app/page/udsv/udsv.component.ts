import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Uds } from '../../interfaces/uds';
import { Udst} from '../../interfaces/udst';
import { async } from 'q';

@Component({
  selector: 'app-udsv',
  templateUrl: './udsv.component.html',
  styleUrls: ['./udsv.component.css']
})
export class UdsvComponent implements OnInit {

  unidad: Uds []= [];
  unidadt: Udst []= [];

  constructor(private Service: ServicioService,) { }

  ngOnInit() {

    this.Service.getUds()
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
