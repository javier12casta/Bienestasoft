import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Regional } from '../../interfaces/regional';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-centrozonalinh',
  templateUrl: './centrozonalinh.component.html',
  styleUrls: ['./centrozonalinh.component.css']
})
export class CentrozonalinhComponent implements OnInit {
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
    idRegional: 2,
  };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getCentroid(params.id)
        .subscribe(res => {
          console.log(res);
          this.centros = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }
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

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putCentro(this.centros.idCentrosZonales, this.centros)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          this.showMenssage2();
          console.log(err);
        }
      );
  }

    //mensajes de creacion
    showMenssage(){
      Swal.fire({
        title: 'Inhabilitado!',
        text: 'Centro Zonal Inhabilitado',
        type: 'success',
        confirmButtonText: 'Entendido'
      });
    }
  //Mensaje de error
  
  showMenssage2(){
    Swal.fire({
      title: 'Error!',
      text: 'Error al inhabilitar el centro zonal',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }
}
