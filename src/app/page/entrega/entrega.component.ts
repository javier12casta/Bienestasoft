import { Component, OnInit } from '@angular/core';
import { Entrega } from '../../interfaces/entrega';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  entrega: Entrega[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte centro zonal';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.ObtenerEntrega()
    .subscribe(async (data) => {
      this.entrega = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
