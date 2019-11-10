import { Component, OnInit } from '@angular/core';
import { Devoluciones} from '../../interfaces/devoluciones';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  devolucion: Devoluciones[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getdevoluciones()
    .subscribe( (data) => {
      this.devolucion = data;
      console.log(data);
      console.log('funciona');
    }
    );
  }

}
