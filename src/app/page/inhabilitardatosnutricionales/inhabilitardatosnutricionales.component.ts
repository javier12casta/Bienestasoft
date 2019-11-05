import { Component, OnInit } from '@angular/core';
import { Datosvarios } from '../../interfaces/datosvarios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitardatosnutricionales',
  templateUrl: './inhabilitardatosnutricionales.component.html',
  styleUrls: ['./inhabilitardatosnutricionales.component.css']
})
export class InhabilitardatosnutricionalesComponent implements OnInit {

  dvarios: Datosvarios[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {


    this.Service.getdatosvarios()
    .subscribe(async (data) => {
      this.dvarios = data;
      console.log(data);
      console.log('funciona');
    
    }
    );
  }

}
