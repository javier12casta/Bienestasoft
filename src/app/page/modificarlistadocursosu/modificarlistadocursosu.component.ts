import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';
import { Listadocursost } from 'src/app/interfaces/listadocursost';

@Component({
  selector: 'app-modificarlistadocursosu',
  templateUrl: './modificarlistadocursosu.component.html',
  styleUrls: ['./modificarlistadocursosu.component.css']
})
export class ModificarlistadocursosuComponent implements OnInit {

  listad: Listadocursost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

      this.Service.getlistadocursostablau()
    .subscribe(async (data) => {
      this.listad = data; 
      console.log(data);
      console.log('funciona');
    }
    );
  }


}
