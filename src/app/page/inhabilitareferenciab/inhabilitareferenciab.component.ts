import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitareferenciab',
  templateUrl: './inhabilitareferenciab.component.html',
  styleUrls: ['./inhabilitareferenciab.component.css']
})
export class InhabilitareferenciabComponent implements OnInit {
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
