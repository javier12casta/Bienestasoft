import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';
import { Listadocursost } from 'src/app/interfaces/listadocursost';
@Component({
  selector: 'app-modificarlistadoc',
  templateUrl: './modificarlistadoc.component.html',
  styleUrls: ['./modificarlistadoc.component.css']
})
export class ModificarlistadocComponent implements OnInit {
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


