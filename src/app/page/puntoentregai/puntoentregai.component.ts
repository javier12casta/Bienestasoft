import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-puntoentregai',
  templateUrl: './puntoentregai.component.html',
  styleUrls: ['./puntoentregai.component.css']
})
export class PuntoentregaiComponent implements OnInit {

  puntos : Puntoentrega = {
    idPuntoEntrega:0,
    NombrePE:'',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Suplente:'',
    Estado: 1,
    Telefono: '',
    CodigoExternoPE: 2345,
    idBarriosVeredas: 1,
    idCentrosZonales: 1,
  };

  modificar = false;
  constructor(
    private Service : ServicioService,
    private activeRoute: ActivatedRoute
  ) { }

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
  }
  //insertar Datos
  insertDatos(Centrozonal : string) {
    delete this.puntos.idPuntoEntrega;
    this.Service.postPunto(this.puntos).subscribe(res => {
      console.log(this.puntos);
      console.log(res);
    },
      err => {
        console.log(err);
      });
  }
  // Actualizar Datos
  updateDatos(){
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
