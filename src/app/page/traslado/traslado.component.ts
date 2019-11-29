import { Component, OnInit } from '@angular/core';
import { Translado} from '../../interfaces/traslado';
import { ServicioService } from '../../servicio.service';
import { Trasladost } from 'src/app/interfaces/trasladost';

@Component({
  selector: 'app-traslado',
  templateUrl: './traslado.component.html',
  styleUrls: ['./traslado.component.css']
})
export class TrasladoComponent implements OnInit {

  translado: Trasladost[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getrasladostabla()
    .subscribe( (data) => {
      this.translado = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
