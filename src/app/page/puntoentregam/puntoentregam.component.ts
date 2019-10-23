import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from '../..//interfaces/centrozonal';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puntoentregam',
  templateUrl: './puntoentregam.component.html',
  styleUrls: ['./puntoentregam.component.css']
})
export class PuntoentregamComponent implements OnInit {

  centros: Centrozonal[] = [];

  puntos: Puntoentrega = {
    idPuntoEntrega: 0,
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
    private activeRoute: ActivatedRoute,private router:Router
  ) { }

  modificar = false;

 async ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      await  this.Service.getPuntoid(params.id)
        .subscribe(res => {
          console.log(res);
          this.puntos = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
    // Traer centro Zonal
    await this.Service.getCentro()
      .subscribe(res => {
        this.centros = res;
      }, err => {
        console.log(err);
      });

    console.log(this.puntos);
  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putPunto(this.puntos.idPuntoEntrega, this.puntos)
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
      text: 'Punto de entrega modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/puntoentrega']);
    
      }

    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al modificar el punto de entrega',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/puntoentrega']);
    
      }

    });
  }


}
