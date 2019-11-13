import { Component, OnInit } from '@angular/core';
import { Salidacentro } from 'src/app/interfaces/salidacentro';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Inventario } from '../../interfaces/inventario';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';

@Component({
  selector: 'app-salidacentroc',
  templateUrl: './salidacentroc.component.html',
  styleUrls: ['./salidacentroc.component.css']
})
export class SalidacentrocComponent implements OnInit {

  salidacentro: Salidacentro[] = [];
  public inv: Inventario[] = [];
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];
  public alm1: Almacen[] = [];
  cant;
  id;
  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    sal: Salidacentro = {

      lote  : '',
      fechavencimiento  : 0,
      cantidad  : 0,
      unidad  : '',
      fecharegistro  : 0,
      idCentroDistribucionOrigen  : 0,
      idCentroDistribucionDestino  : 0,
      idAlmacen  : 0,
      idTipoBienesterina  : 0,
    
    };

    bine: Almacen = {

    idAlmacenes: 1,
    NumeroExterno : '',
    Nombre: '',
    Responsable : '',
    Capacidad  : 0,
    UnidadMedida  : '',
    Estado  : 0,
   
      
  
  
      };



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

      const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getalmacenid(params.id)
        .subscribe(res => {
          console.log(res);
          this.alm1 = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }



      this.Service.getinventario()
      .subscribe(async (data) => {
        this.inv = data;
        console.log(data);
        console.log('funciona');
      }
      );


  }


  onClickMe(){

    this.Service.postsalidacentro(this.sal).subscribe(res => {
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
      text: 'salida centro de distribucion Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/salidacentro']);
    
      }
    });
  }


  showMenssage4(){
    Swal.fire({
      title: 'Creado!',
      text: 'entro',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/salidacentro']);
    
      }
    });
  }

  
}
