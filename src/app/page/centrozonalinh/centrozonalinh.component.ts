import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Regional } from '../../interfaces/regional';
import Swal from 'sweetalert2';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-centrozonalinh',
  templateUrl: './centrozonalinh.component.html',
  styleUrls: ['./centrozonalinh.component.css']
})
export class CentrozonalinhComponent implements OnInit {
  public regional: Regional[] = [];
  municipios: Municipio[] = [];
  puntos: Puntoentrega[] = [];
  usuarios: Usuarios[] = [];
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
    private router:Router,
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

        this.Service.getUsuarios().subscribe(res => {
          this.usuarios = Object(res);
        }, err => {
          console.log(err);
        });
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
    var cont2: number = 0;
    var cont3: number = 0;
    for (let numeros of this.puntos) {
      if (numero == numeros.idCentrosZonales && numeros.Estado == 1) {
        var cont: number = 0;
        var cont2 = cont + 1;
        this.showMenssage3();
      } else if(numero == numeros.idCentrosZonales && numeros.Estado == 0) {
        var cont: number = 0;
        cont3 = cont + 1;
      }
    }
    for (let numeros of this.usuarios) {
      if (numero == numeros.idCentrosZonales && numeros.Estado == 1) {
        var cont: number = 0;
        var cont2 = cont + 1;
        //console.log('Comaparado', numero, numeros.idPuntoEntrega);
        //console.log('contador 2', cont2);
      } else if (numero == numeros.idCentrosZonales && numeros.Estado == 0) {
        var cont: number = 0;
        cont3 = cont + 1;
        //console.log('contador 3', cont3);
      }
    if (cont2 == 0 && cont3 > 0) {
      console.log('funciona');
      this.updateDatos2();
    } else {
      //mensaje de no se puede inhabilitar
      this.showMenssage3();
    }

    }
    if (cont2 == 0 && cont3 >0){
      //console.log('funciona');
      this.updateDatos2();
    }else{
      //mensaje de no se puede inhabilitar
      this.showMenssage3();
    }
  }


  updateDatos2() {
    // metodo update inhabilitar
    this.Service.putCentro(this.centros.idCentrosZonales, this.centros)
      .subscribe(
        res => {
          console.log(res);
          if (this.centros.Estado == 1){
            this.showMenssage();
          }else if(this.centros.Estado == 0){
            this.showMenssage4();
          }
        }, err => {
          this.showMenssage2();
          console.log(err);
        }
      );
  }
  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Habilitado!',
      text: 'Centro Zonal habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((res) => {
      if(res.value){
        console.log('confirmed');
        this.router.navigate(['/centrozonal']);
    }
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
  showMenssage4() {
    Swal.fire({
      title: 'Inhabilitado!',
      text: 'centro zonal inhabilitado',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((res) => {
      if(res.value){
        console.log('confirmed');
        this.router.navigate(['/centrozonal']);
    }
    });
  }
}
