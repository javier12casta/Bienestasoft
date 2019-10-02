import { Component, OnInit } from '@angular/core';
import { Rol } from '../../interfaces/Rol';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-roli',
  templateUrl: './roli.component.html',
  styleUrls: ['./roli.component.css']
})
export class RoliComponent implements OnInit {

  roles: Rol[] = [];

  constructor(private Service: ServicioService) { 

  }

  async ngOnInit() {
    this.Service.ObtenerRoles()
      .subscribe(async (data) => {
        this.roles = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }

}
