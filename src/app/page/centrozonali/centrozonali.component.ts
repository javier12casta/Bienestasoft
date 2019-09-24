import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centrozonali',
  templateUrl: './centrozonali.component.html',
  styleUrls: ['./centrozonali.component.css']
})
export class CentrozonaliComponent implements OnInit {
  ServicioService: any;

  constructor(
  private activeRoute: ActivatedRoute,
  ){
  }

 centros : Centrozonal = {
    idCentrosZonales : 0,
      NombreCentroZonal: '',
      idMunicipios: 1,
      idComunas: 2,
      idBarrioVeredas: 2,
      CodigoExternoJcz: '',
      CodigoExternoCZ: 5634,
      Estado: 1 ,
      idRegional: 2,
  };

  modificar = false;

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.ServicioService.getCentroid(params.id)
        .subscribe(res => {
          console.log(res);
          this.centros = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
  }


  //insertar Datos
  insertDatos(Centrozonal : string) {
    delete this.centros.idCentrosZonales;
    this.ServicioService.postCentro(this.centros).subscribe(res => {
      console.log(this.centros);
      console.log(res);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos
  updateDatos(){
    this.ServicioService.putCentro(this.centros.idCentrosZonales, this.centros)
    .subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }
  
}
