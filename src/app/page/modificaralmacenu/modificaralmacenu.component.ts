import { Component, OnInit } from '@angular/core';
import { Almacent} from '../../interfaces/almacent';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-modificaralmacenu',
  templateUrl: './modificaralmacenu.component.html',
  styleUrls: ['./modificaralmacenu.component.css']
})
export class ModificaralmacenuComponent implements OnInit {

  alm: Almacent[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenu()
    .subscribe(async (data) => {
      this.alm = data;
      console.log(data);
    }
    );

  }

}
