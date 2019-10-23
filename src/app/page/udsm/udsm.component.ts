import { Component, OnInit } from '@angular/core';
import { Uds } from '../../interfaces/uds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-udsm',
  templateUrl: './udsm.component.html',
  styleUrls: ['./udsm.component.css']
})
export class UdsmComponent implements OnInit {

  centros: Centrozonal[] = [];
  puntos: Puntoentrega[] = [];

  unidad: Uds = {
    idUDS: 0,
    NombreUDS: '',
    CodigoInternoUDS: '',
    Direccion: '',
    ReponsableUDS: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoUDS: '',
    idPuntoEntrega: 0,
    idCentrosZonales: 0,
    Barrio: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
    private router:Router

  ) { }

  modificar = false;
  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUdsid(params.id)
        .subscribe(res => {
          console.log(res);
          this.unidad = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
    //Traer Centros zonales
    this.Service.getCentro()
      .subscribe(res => {
        this.centros = res;
      }, err => {
        console.log(err);
      });
    //Traer puntos de entrega
    this.Service.getPunto()
      .subscribe(res => {
        this.puntos = res;
      }, err => {
        console.log(err);
      });
  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putUds(this.unidad.idUDS, this.unidad)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
          this.showMenssage2();
        }
      );
  }


  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Modificado!',
      text: 'UDS modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/uds']);
    
      }

    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al modificar la UDS',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/uds']);
    
      }

    });
  }



}
