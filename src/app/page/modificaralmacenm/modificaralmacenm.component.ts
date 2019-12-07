import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Almacen } from '../../interfaces/almacen';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';

@Component({
  selector: 'app-modificaralmacenm',
  templateUrl: './modificaralmacenm.component.html',
  styleUrls: ['./modificaralmacenm.component.css']
})
export class ModificaralmacenmComponent implements OnInit {

  public almc: Almacen[] = [];
  public cen: Centrozonal[] = [];
  public centrod: Centrodistribucion[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    almac: Almacen = {
      idAlmacenes: 1,
      NumeroExterno : '',
      Nombre: '',
      Responsable: '',
      Capacidad: 0,
      Capacidad2: 0,
      UnidadMedida: '',
      Estado: 0,
      idCentroDistribucion: 1,

      };


  ngOnInit() {

    
    this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    this.Service.getcentrodistribucion()
    .subscribe(res => {
      this.centrod = res;
    }, err => {
      console.log(err);
    });

    
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
      title: 'Modificado',
      text: 'Almacen modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificaralmaceni']);
    
      }
    });
  }

  updateDatos() {
    this.Service.putalmacen(this.almac.idAlmacenes, this.almac)
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
