import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Listadocursos } from 'src/app/interfaces/listadocursos';

@Component({
  selector: 'app-listadocursosv',
  templateUrl: './listadocursosv.component.html',
  styleUrls: ['./listadocursosv.component.css']
})
export class ListadocursosvComponent implements OnInit {

  servic: Listadocursos[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getlistadocursos()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
