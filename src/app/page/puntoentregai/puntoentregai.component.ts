import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from '../..//interfaces/centrozonal';

@Component({
  selector: 'app-puntoentregai',
  templateUrl: './puntoentregai.component.html',
  styleUrls: ['./puntoentregai.component.css']
})
export class PuntoentregaiComponent implements OnInit {

  centros: Centrozonal[]=[];

  punto: Puntoentrega = {
    idPuntoEntrega: 0,
    NombrePE: '',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Suplente: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoPE: 0,
    idBarriosVeredas:0,
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
          this.punto = Object(res);
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
  }


  //insertar Datos ------------------------------------------------
  insertDatos(Centrozonal: string) {
    delete this.punto.idCentrosZonales;
    this.Service.postPunto(this.punto).subscribe(res => {
      console.log(this.punto);
      console.log(res);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putPunto(this.punto.idPuntoEntrega, this.punto)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }


}
