import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { ServicioService } from '../../servicio.service';
@Component({
  selector: 'app-modificareferenciab',
  templateUrl: './modificareferenciab.component.html',
  styleUrls: ['./modificareferenciab.component.css']
})
export class ModificareferenciabComponent implements OnInit {
  tbienestarina: TipoBienestarina[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getTipobienestarina()
      .subscribe(async (data) => {
        this.tbienestarina = data;
        console.log(data);
        console.log('funciona');

      }
      );

  }

}
