import { Component, OnInit } from '@angular/core';
import { Almacen} from '../../interfaces/almacen';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitaralmacendi',
  templateUrl: './inhabilitaralmacendi.component.html',
  styleUrls: ['./inhabilitaralmacendi.component.css']
})
export class InhabilitaralmacendiComponent implements OnInit {

  almac: Almacen[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getalmacen()
    .subscribe(async (data) => {
      this.almac = data;
      console.log(data);
      console.log('funciona');
    }
    );
    
  }


  }


