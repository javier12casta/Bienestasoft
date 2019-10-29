import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-refrenciasbienestarinav',
  templateUrl: './refrenciasbienestarinav.component.html',
  styleUrls: ['./refrenciasbienestarinav.component.css']
})
export class RefrenciasbienestarinavComponent implements OnInit {

  servic: TipoBienestarina[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getTipobienestarina()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
