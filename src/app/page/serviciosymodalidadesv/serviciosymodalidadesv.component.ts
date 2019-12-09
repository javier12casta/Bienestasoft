import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-serviciosymodalidadesv',
  templateUrl: './serviciosymodalidadesv.component.html',
  styleUrls: ['./serviciosymodalidadesv.component.css']
})
export class ServiciosymodalidadesvComponent implements OnInit {

  servic: MaestroBienestarina[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getMaestrosBienestrina()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
