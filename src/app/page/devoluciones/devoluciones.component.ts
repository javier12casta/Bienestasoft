import { Component, OnInit } from '@angular/core';
import { Devolucionest} from '../../interfaces/devolucionest';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  devolucion: Devolucionest[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getdevolucionestabla()
    .subscribe( (data) => {
      this.devolucion = data;
      console.log(data);
      console.log('funciona');
    }
    );
  }

}
