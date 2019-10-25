import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Regional } from '../../interfaces/regional';
import Swal from 'sweetalert2';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';

@Component({
  selector: 'app-centrozonalinh',
  templateUrl: './centrozonalinh.component.html',
  styleUrls: ['./centrozonalinh.component.css']
})
export class CentrozonalinhComponent implements OnInit {
  public regional: Regional[] = [];
  municipios: Municipio[] = [];
  puntos: Puntoentrega[] = [];
  punto: Puntoentrega = {
    idPuntoEntrega: 0,
    NombrePE: '',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Estado: 0,
    Telefono: '',
    CodigoExternoPE: '',
    idCentrosZonales: 0,
    BarrioPE: '',
    Comuna: '',
  };
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

  public options: Select2Options;

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
  ) {
  }


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

    this.Service.getPunto().subscribe(
      res => {
        this.punto = Object(res);
        this.puntos = Object(res);
      }, err => {
        console.log(err);
      }
    );
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
    const params = this.activeRoute.snapshot.params;
    var numero = params.id;
    for (let numeros of this.puntos) {
      console.log(numeros.idCentrosZonales, numeros.Estado);
      console.log(numero);
      if (numero == numeros.idCentrosZonales && numeros.Estado == 1) {
        console.log('Entro al if');
        this.showMenssage3();
      } else if(numero == numeros.idCentrosZonales && numeros.Estado == 0) {
        this.updateDatos2();
        console.log('Inhabilitado');
      }
    }

  }


  updateDatos2() {
    // metodo update inhabilitar
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
  showMenssage() {
    Swal.fire({
      title: 'Inhabilitado!',
      text: 'Centro Zonal Inhabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al inhabilitar el centro zonal',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }
  showMenssage3() {
    Swal.fire({
      title: 'Error!',
      text: 'No es posible inhabilitar el centro zonal',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }
}
