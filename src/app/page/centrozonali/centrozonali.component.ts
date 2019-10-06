import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Regional } from '../../interfaces/regional';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-centrozonali',
  templateUrl: './centrozonali.component.html',
  styleUrls: ['./centrozonali.component.css']
})
export class CentrozonaliComponent implements OnInit {
  //public exampleData: Array<Select2OptionData>;
  public regional: Regional[] = [];
  municipios: Municipio[] = [];
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
    Comuna: '',
    CodigoExternoJcz: '',
    CodigoExternoCZ: 0,
    Estado: 1,
    idRegional: 1,
  };

  ngOnInit() {
    // Traer Muinicipios ---------------------------------------
    this.Service.getMunicipio()
      .subscribe(res => {
        this.municipios = res;
      }, err => {
        console.log(err);
      });

    //traer regionales -----------------------------------------
    this.Service.getRegional()
      .subscribe(res => {
        this.regional = res;
      }, err => {
        console.log(err);
      });
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
      this.showMenssage();
    },
      err => {
        console.log(err);
        this.showMenssage();
      });

  }

  //mensajes de creacion
  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Centro Zonal Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    });
  }
//Mensaje de error

showMenssage2(){
  Swal.fire({
    title: 'Error!',
    text: 'Error al crear centro zonal',
    type: 'error',
    confirmButtonText: 'Entendido'
  });
}
}
