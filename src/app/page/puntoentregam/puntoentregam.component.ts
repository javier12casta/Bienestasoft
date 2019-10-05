import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from '../..//interfaces/centrozonal';

@Component({
  selector: 'app-puntoentregam',
  templateUrl: './puntoentregam.component.html',
  styleUrls: ['./puntoentregam.component.css']
})
export class PuntoentregamComponent implements OnInit {

  centros: Centrozonal[]=[];

  puntos: Puntoentrega = {
    idPuntoEntrega: 0,
    NombrePE: '',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoPE: '',
    idBarriosVeredas:1,
    idCentrosZonales: 0,
    BarrioPE: '',
    Comuna: '',
  } ;

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
  ) { }

  modificar = false;

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getPuntoid(params.id)
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
    this.Service.getCentro()
    .subscribe(res=>{
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
        }, err => {
          console.log(err);
        }
      );
  }
}