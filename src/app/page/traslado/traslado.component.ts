import { Component, OnInit } from '@angular/core';
import { Translado} from '../../interfaces/traslado';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-traslado',
  templateUrl: './traslado.component.html',
  styleUrls: ['./traslado.component.css']
})
export class TrasladoComponent implements OnInit {

  translado: Translado[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getraslados()
    .subscribe( (data) => {
      this.translado = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
