import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Salidacentro } from 'src/app/interfaces/salidacentro';

@Component({
  selector: 'app-salidacentro',
  templateUrl: './salidacentro.component.html',
  styleUrls: ['./salidacentro.component.css']
})
export class SalidacentroComponent implements OnInit {

  centroD: Salidacentro[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  constructor(private Service: ServicioService) { }

 
  ngOnInit() {

    this.Service.getsalidacentroTabla()
      .subscribe( (data) => {
        this.centroD = Object(data);
        console.log(data);
        console.log('funciona');
      }
      );
  }

}
