import { Component, OnInit } from '@angular/core';
import { Recuentoinventario } from 'src/app/interfaces/recuentoinventario';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Recuentoinventariot } from 'src/app/interfaces/recuentoinventariot';

@Component({
  selector: 'app-recuentoinventario',
  templateUrl: './recuentoinventario.component.html',
  styleUrls: ['./recuentoinventario.component.css']
})
export class RecuentoinventarioComponent implements OnInit {

  recuento:Recuentoinventariot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getrecuentotabla()
    .subscribe(async (data) => {
      this.recuento = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
