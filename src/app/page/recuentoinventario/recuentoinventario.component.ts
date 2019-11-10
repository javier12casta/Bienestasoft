import { Component, OnInit } from '@angular/core';
import { Recuentoinventario } from 'src/app/interfaces/recuentoinventario';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recuentoinventario',
  templateUrl: './recuentoinventario.component.html',
  styleUrls: ['./recuentoinventario.component.css']
})
export class RecuentoinventarioComponent implements OnInit {

  recuento:Recuentoinventario[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getrecuento()
    .subscribe(async (data) => {
      this.recuento = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
