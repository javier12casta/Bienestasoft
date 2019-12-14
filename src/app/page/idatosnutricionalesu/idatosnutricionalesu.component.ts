import { Component, OnInit } from '@angular/core';
import { Datosvariost } from '../../interfaces/datosvariost';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-idatosnutricionalesu',
  templateUrl: './idatosnutricionalesu.component.html',
  styleUrls: ['./idatosnutricionalesu.component.css']
})
export class IdatosnutricionalesuComponent implements OnInit {

  
  dvarios: Datosvariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private Service: ServicioService) { }

  ngOnInit() {


    this.Service.getdatosvariosu()
    .subscribe(async (data) => {
      this.dvarios = data;
      console.log(data);
      console.log('funciona');
    
    }
    );
  }


}
