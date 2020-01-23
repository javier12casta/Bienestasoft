import { Component, OnInit } from '@angular/core';
import { Recepcion } from 'src/app/interfaces/recepcion';
import { ServicioService } from '../../servicio.service';
import { Recepciont } from 'src/app/interfaces/recepciont';

@Component({
  selector: 'app-cargainventario',
  templateUrl: './cargainventario.component.html',
  styleUrls: ['./cargainventario.component.css']
})
export class CargainventarioComponent implements OnInit {

  rec: Recepciont[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

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
