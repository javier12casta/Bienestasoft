import { Component, OnInit } from '@angular/core';
import { Recuentoinventario } from 'src/app/interfaces/recuentoinventario';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';

@Component({
  selector: 'app-recuentoinventarioc',
  templateUrl: './recuentoinventarioc.component.html',
  styleUrls: ['./recuentoinventarioc.component.css']
})
export class RecuentoinventariocComponent implements OnInit {

  recuento:Recuentoinventario[] = [];
 
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }


    sal: Recuentoinventario = {

      lote : '',
      FechaVencimiento : 0,
      unidadmedida1  : '',
      cantidad: 0,
      cantidadcontada: 0,
      unidadmedida2  : '',
      idTipoBienesterina: 0,
      idAlmacenes: 0,
      idCentroDistribucion: 0,
    } 
  ngOnInit() {

    this.Service.getTipobienestarina()
    .subscribe(async (data) => {
      this.tip = data;
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getcentrodistribucion()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
        console.log('funciona');
      }
      );

      this.Service.getalmacen()
      .subscribe(async (data) => {
        this.alm = data;
        console.log(data);
        console.log('funciona');
      }
      );

      
  }

  onClickMe(){

    
    this.Service.postrecuento(this.sal).subscribe(res => {
      console.log(this.sal);
      this.showMenssage();
      
      },
      err => {
        console.log(err);
      });
      
     
     

  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Recuento Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/recuentoinventario']);
    
      }
    });
  }


}
