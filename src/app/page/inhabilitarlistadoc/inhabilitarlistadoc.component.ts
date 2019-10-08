import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';

@Component({
  selector: 'app-inhabilitarlistadoc',
  templateUrl: './inhabilitarlistadoc.component.html',
  styleUrls: ['./inhabilitarlistadoc.component.css']
})
export class InhabilitarlistadocComponent implements OnInit {

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
