import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Comuna } from '../../interfaces/comuna';
import { Regional } from '../../interfaces/regional';
import {Barrio} from '../../interfaces/barrio';

@Component({
  selector: 'app-centrozonali',
  templateUrl: './centrozonali.component.html',
  styleUrls: ['./centrozonali.component.css']
})
export class CentrozonaliComponent implements OnInit {
  
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

  muninicipios: Municipio[]=[];
  comunas: Comuna []=[];
  regional: Regional[]=[];
  barrio: Barrio []=[];

  modificar = false;

  constructor(
  private activeRoute: ActivatedRoute,
  private Service: ServicioService,
  ){
  }



  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getCentroid(params.id)
        .subscribe(res => {
          console.log(res);
          this.centros = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
    this.Service.getMunicipio()
    .subscribe(data=>{
      this.muninicipios = data;
      console.log(data);
    });
  }


  //insertar Datos
  insertDatos(Centrozonal : string) {
    delete this.centros.idCentrosZonales;
    this.Service.postCentro(this.centros).subscribe(res => {
      console.log(this.centros);
      console.log(res);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos
  updateDatos(){
    this.Service.putCentro(this.centros.idCentrosZonales, this.centros)
    .subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }
  
}
