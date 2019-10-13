import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from '../..//interfaces/centrozonal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puntoentregai',
  templateUrl: './puntoentregai.component.html',
  styleUrls: ['./puntoentregai.component.css']
})
export class PuntoentregaiComponent implements OnInit {

  centros: Centrozonal[] = [];

  puntos: Puntoentrega = {
    NombrePE: '',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoPE: '',
    idCentrosZonales: 0,
    BarrioPE: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
  ) { }

  modificar = false;

  ngOnInit() {
    // Traer centro Zonal
    this.Service.getCentro()
      .subscribe(res => {
        this.centros = res;
      }, err => {
        console.log(err);
      });

    console.log(this.puntos);
  }


  //insertar Datos ------------------------------------------------
  insertDatos() {
    this.Service.postPunto(this.puntos).subscribe(res => {
      console.log(this.puntos);
      this.showMenssage();
    }, err => {
      console.log(err);
      this.showMenssage2();
    });

  }

  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Creado!',
      text: 'Punto de entrega Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al crear el punto de entrega',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

}
