import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Almacen } from '../../interfaces/almacen';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificaralmacenm',
  templateUrl: './modificaralmacenm.component.html',
  styleUrls: ['./modificaralmacenm.component.css']
})
export class ModificaralmacenmComponent implements OnInit {

  public almc: Almacen[] = [];


  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    almac: Almacen = {

      idAlmacenes: 1,
      NumeroExterno : '',
      NombreCentroDistribucion: '',
      Responsable : '',
      Capacidad  : 0,
      UnidadMedida  : '',
      Estado  : 0,
    

      };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getalmacenid(params.id)
        .subscribe(res => {
          this.almac = Object(res);
          console.log(this.almac);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Almacen Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    });
  }

  updateDatos() {
    this.Service.putalmacen(this.almac.idCentroDistribucion, this.almac)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }



}
