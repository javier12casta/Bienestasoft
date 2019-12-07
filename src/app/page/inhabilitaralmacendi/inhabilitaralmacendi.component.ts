import { Component, OnInit } from '@angular/core';
import { Almacent} from '../../interfaces/almacent';
import { Centrozonal} from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitaralmacendi',
  templateUrl: './inhabilitaralmacendi.component.html',
  styleUrls: ['./inhabilitaralmacendi.component.css']
})
export class InhabilitaralmacendiComponent implements OnInit {

  almac: Almacent[] = [];
  cen: Centrozonal[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenc()
    .subscribe(async (data) => {
      this.almac = data;
      console.log(data);
      console.log('funciona');
    }
    );

  
    
  }


  }


