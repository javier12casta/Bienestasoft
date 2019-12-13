import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Listadocursos } from 'src/app/interfaces/listadocursos';
import Swal from 'sweetalert2';
import { Listadocursost } from 'src/app/interfaces/listadocursost';

@Component({
  selector: 'app-listadocursosu',
  templateUrl: './listadocursosu.component.html',
  styleUrls: ['./listadocursosu.component.css']
})
export class ListadocursosuComponent implements OnInit {

  servic: Listadocursos[] = [];
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
