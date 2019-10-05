import { Component, OnInit } from '@angular/core';
import { Uds } from '../../interfaces/uds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';


@Component({
  selector: 'app-udsi',
  templateUrl: './udsi.component.html',
  styleUrls: ['./udsi.component.css']
})
export class UdsiComponent implements OnInit {
  
  centros: Centrozonal []=[];
  puntos: Puntoentrega[]=[];

  unidad : Uds = {
    idUDS: 0,
    NombreUDS: '',
    CodigoInternoUDS: '',
    Direccion: '',
    ReponsableUDS: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoUDS: '',
    Comunas_idComunas: 0,
    idPuntoEntrega:0,
    idBarriosVeredas: 1,
    idCentrosZonales: 0,
    Barrio: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute
  ) { }

  modificar = false;
  ngOnInit() {
//Traer Centros zonales
    this.Service.getCentro()
    .subscribe(res=> {
      this.centros = res;
    }, err => {
      console.log(err);
    });
//Traer puntos de entrega
    this.Service.getPunto()
    .subscribe(res=>{
      this.puntos =res;
    }, err=>{
      console.log(err);
    });
  }

    //insertar Datos ------------------------------------------------
    insertDatos() {
      delete this.unidad.idUDS;
      this.Service.postUds(this.unidad).subscribe(res => {
        console.log(this.unidad);
        console.log(res);
      },
        err => {
          console.log(err);
        });
  
    }

}
