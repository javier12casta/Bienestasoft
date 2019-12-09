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
    f = new Date();
    fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
    
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
