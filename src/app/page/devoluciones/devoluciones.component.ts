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
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

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
