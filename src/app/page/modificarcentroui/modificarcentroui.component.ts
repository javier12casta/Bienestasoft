import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import Swal from 'sweetalert2';
import { Uds } from 'src/app/interfaces/uds';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarcentroui',
  templateUrl: './modificarcentroui.component.html',
  styleUrls: ['./modificarcentroui.component.css']
})
export class ModificarcentrouiComponent implements OnInit {
  public centrod: Centrodistribucion[] = [];
  public cen: Uds[] = [];

  constructor( private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }


    cend: Centrodistribucion = {

    idCentroDistribucion: 1,
    NumeroExterno:'',
    Nombre : '',
    Responsable : '' ,
    Direccion : '',
    Barrio :'',
    Telefono : 0,
    Estado : 0,
    };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getcentrodistribucionid(params.id)
        .subscribe(res => {
          this.cend = Object(res);
          console.log(this.cend);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getUds()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });
   


  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Centro Distribucion Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarcentrou']);
    
      }
    });
  }

  updateDatos() {
    this.Service.putcentrodistribucion(this.cend.idCentroDistribucion, this.cend)
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
