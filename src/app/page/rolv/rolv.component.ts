import { Component, OnInit } from '@angular/core';
import { Rol } from '../../interfaces/Rol';
import { ServicioService } from '../../servicio.service';
import { Permisos } from 'src/app/interfaces/permisos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rolv',
  templateUrl: './rolv.component.html',
  styleUrls: ['./rolv.component.css']
})
export class RolvComponent implements OnInit {

  roles: Rol[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router: Router,) { }

  ngOnInit() {

     this.Service.ObtenerRoles()
    .subscribe(async (data) => {
      this.roles = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
