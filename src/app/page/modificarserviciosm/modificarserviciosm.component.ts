import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from '../../interfaces/maestrosBienestarina';
import { ServicioService } from '../../servicio.service';
@Component({
  selector: 'app-modificarserviciosm',
  templateUrl: './modificarserviciosm.component.html',
  styleUrls: ['./modificarserviciosm.component.css']
})
export class ModificarserviciosmComponent implements OnInit {
  serviciom: MaestroBienestarina[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getMaestrosBienestrina()
    .subscribe(async (data) => {
      this.serviciom = data;
      console.log(data);
      console.log('funciona');
    }
    );
}

  }


