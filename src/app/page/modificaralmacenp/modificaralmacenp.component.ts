import { Component, OnInit } from '@angular/core';
import { Almacent} from '../../interfaces/almacent';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificaralmacenp',
  templateUrl: './modificaralmacenp.component.html',
  styleUrls: ['./modificaralmacenp.component.css']
})
export class ModificaralmacenpComponent implements OnInit {

  alm: Almacent[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenp()
    .subscribe(async (data) => {
      this.alm = data;
      console.log(data);
    }
    );

  }

}
