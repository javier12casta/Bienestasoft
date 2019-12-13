import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';
import { Listadocursost } from 'src/app/interfaces/listadocursost';

@Component({
  selector: 'app-inhabilitarlistadoc',
  templateUrl: './inhabilitarlistadoc.component.html',
  styleUrls: ['./inhabilitarlistadoc.component.css']
})
export class InhabilitarlistadocComponent implements OnInit {

  listadoc: Listadocursos[] = [];
  listad: Listadocursost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getlistadocursos()
      .subscribe(async (data) => {
        this.listadoc = data;
        console.log(data);
        console.log('funciona');
      }
      );
      
      this.Service.getlistadocursostabla()
    .subscribe(async (data) => {
      this.listad = data; 
      console.log(data);
      console.log('funciona');
    }
    );
  }
}
