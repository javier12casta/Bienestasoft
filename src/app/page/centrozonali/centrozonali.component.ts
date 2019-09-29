import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Comuna } from '../../interfaces/comuna';
import { Regional } from '../../interfaces/regional';
import { Barrio } from '../../interfaces/barrio';

import { Select2OptionData } from 'ng2-select2';
@Component({
  selector: 'app-centrozonali',
  templateUrl: './centrozonali.component.html',
  styleUrls: ['./centrozonali.component.css']
})
export class CentrozonaliComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public regional: Regional[] = [];
  public options: Select2Options;

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
  ) {
  }

  centros: Centrozonal = {
    idCentrosZonales: 0,
    NombreCentroZonal: '',
    idMunicipios: 1,
    idComunas: 2,
    idBarrioVeredas: 0,
    CodigoExternoJcz: '',
    CodigoExternoCZ: 5634,
    Estado: 1,
    idRegional: 2,
  };

  muninicipios: Municipio[] = [];
  comunas: Comuna[] = [];

  barrio: Barrio[] = [];

  modificar = false;

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
    // Traer Comunas ---------------------------------------
    this.Service.getComuna()
      .subscribe(res => {
/*         var arr = [];
        arr.unshift('Comuna o localidad');
        for (var i = 1; i < res.length; i++) {
          var x = res[i].Comunas;
          var y = res[i].idComunas;
          arr.push(x);
          
        } */ 
        this.comunas = res;
        console.log(this.comunas);
      }, err => {
        console.log(err);
      });
    // Traer Muinicipios ---------------------------------------
    this.Service.getMunicipio()
      .subscribe(res => {
        var arr = [];
        arr.unshift('Municipios');
        for (var i = 1; i < res.length; i++) {
          var x = res[i].Municipio;
          var y = res[i].idMunicipios;
          arr.push(x);
        }
        this.muninicipios = arr;

      }, err => {
        console.log(err);
      });

    //traer regionales -----------------------------------------
    this.Service.getRegional()
      .subscribe(res => {
        this.regional = res;
        var arr = [];
        arr.unshift('Regionales');
        for (var i = 1; i < res.length; i++) {
          var x = res[i].Regional;
          var y = res[i].idRegional;
          arr.push(x);
        }
        this.regional = arr;
        //console.log(this.regional);
      }, err => {
        console.log(err);
      });
      console.log(this.regional);
    //opciones del select ----------------------------------------
    this.options = {
      multiple: false,
      theme: 'classic',
      closeOnSelect: false
    }
  }


  //insertar Datos ------------------------------------------------
  insertDatos(Centrozonal: string) {
    delete this.centros.idCentrosZonales;
    this.Service.postCentro(this.centros).subscribe(res => {
      console.log(this.centros);
      console.log(res);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos---------------------------------------------
  updateDatos() {
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
