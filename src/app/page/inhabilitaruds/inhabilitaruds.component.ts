import { Component, OnInit } from '@angular/core';
import { Inuds } from 'src/app/interfaces/inhabilitaruds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';

@Component({
  selector: 'app-inhabilitaruds',
  templateUrl: './inhabilitaruds.component.html',
  styleUrls: ['./inhabilitaruds.component.css']
})
export class InhabilitarudsComponent implements OnInit {

  public Inunidad: Inuds[] = [];
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

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router: Router) { }

  inud: Inuds = {
    idUDS: 0,
    Estado: 0,
  };

  ngOnInit() {
    var estado = 0;
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUdsid(params.id)
        .subscribe(res => {
          console.log(res);
          this.inud = Object(res);
          this.unidad = Object(res);
          estado = 1;
          if (estado == 1) {
            this.puntoEstado();
          }
        }, err => {
          console.log(err);
        }
        );

    }

  }

  InhabilitarDatos() {
    console.log(this.unidad.Estado);
    if (this.puntos.Estado == 1) {
      this.EnableDatos();
    } else {
      this.showMenssage3();
      this.inud.Estado = 0;
      this.EnableDatos2();
    }
  }

  puntoEstado() {
    //centro zonal 
    var id: string = this.unidad.idPuntoEntrega.toString();
    //console.log(this.unidad.idPuntoEntrega);
    this.Service.getPuntoid(id)
      .subscribe(res => {
        console.log(res);
        this.puntos = Object(res);
      }, err => {
        console.log(err);
      }
      );
  }

  EnableDatos2() {
    this.Service.putUdsInhabilitar(this.inud.idUDS, this.inud)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage3();
        }, err => {
          console.log(err);
        });
  }

  EnableDatos() {
    this.Service.putUdsInhabilitar(this.inud.idUDS, this.inud)
      .subscribe(
        res => {
          console.log(res);
          if (this.inud.Estado == 1) {
            this.showMenssage1();
          } else {
            this.showMenssage();
          }
        }, err => {
          console.log(err);
        });
  }

  showMenssage() {
    Swal.fire({
      title: 'Deshabilitado',
      text: 'Uds Deshabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/udsin']);

      }
    });
  }

  showMenssage1() {
    Swal.fire({
      title: 'Habilitado',
      text: 'Uds habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/udsin']);

      }
    });
  }

  showMenssage3() {
    Swal.fire({
      title: 'Error!',
      text: 'No es posible deshabilitar la unidad de servicio',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/udsin']);

      }
    });
  }

}
