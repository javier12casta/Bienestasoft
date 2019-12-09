import { Component, OnInit } from '@angular/core';
import { Almacent} from '../../interfaces/almacent';
import { Centrozonal} from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitaralmacenp',
  templateUrl: './inhabilitaralmacenp.component.html',
  styleUrls: ['./inhabilitaralmacenp.component.css']
})
export class InhabilitaralmacenpComponent implements OnInit {

  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  almac: Almacent[] = [];
  cen: Centrozonal[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenp()
    .subscribe(async (data) => {
      this.almac = data;
      console.log(data);
      console.log('funciona');
    }
    );

  
    
  }
}
