import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';
@Component({
  selector: 'app-modificarlistadoc',
  templateUrl: './modificarlistadoc.component.html',
  styleUrls: ['./modificarlistadoc.component.css']
})
export class ModificarlistadocComponent implements OnInit {
  listadoc: Listadocursos[] = [];
  


  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getlistadocursos()
      .subscribe(async (data) => {
        this.listadoc = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }

  }


