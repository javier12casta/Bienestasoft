import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InListadocursos } from '../../interfaces/inhabilitarlistadocursos';

@Component({
  selector: 'app-inhabilitarlistadoci',
  templateUrl: './inhabilitarlistadoci.component.html',
  styleUrls: ['./inhabilitarlistadoci.component.css']
})
export class InhabilitarlistadociComponent implements OnInit {
  public listadoc: InListadocursos[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    lisc:InListadocursos = {

      idListadoCursos : 1,
    Estado : 0,
      
   };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getlistadocursossid(params.id)
        .subscribe(res => {
          console.log(res);
          this.lisc = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }


  }

  EnableDatos(){

    this.Service.putlistadocursosInhabilitar(this.lisc.idListadoCursos, this.lisc)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }


}
