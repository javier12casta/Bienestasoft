import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Uds } from '../../interfaces/uds';

@Component({
  selector: 'app-uds',
  templateUrl: './uds.component.html',
  styleUrls: ['./uds.component.css']
})
export class UdsComponent implements OnInit {

  unidad: Uds []= [];
  constructor(
    private Service: ServicioService,

  ) { }

  ngOnInit() {
    this.Service.getUds()
    .subscribe(res => {
      this.unidad = res
    }, err => {
      console.log(err);
    });
  }

}
