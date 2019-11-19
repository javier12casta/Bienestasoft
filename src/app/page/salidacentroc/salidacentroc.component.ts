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
  inventa;
  id1 = 0;

  //para las operaciones
  public inventario: Inventario = {
    idInventario: 0,
    Nombre: '',
    Cantidad: 0,
    Cantidad2: 0,
    unidad: '',
  };


  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    sal: Salidacentro = {

      lote  : '',
      fechavencimiento  : 0,
      cantidad  : 0,
      cantidad2 : 0,
      unidad  : '',
      fecharegistro  : 0,
      idCentroDistribucionOrigen  : 0,
      idCentroDistribucionDestino  : 0,
      idAlmacen  : 0,
      idTipoBienesterina  : 0,
    
    };

      //para la capacidad
  public almacen: Almacen = {
    idAlmacenes: 0,
    NumeroExterno: '',
    Nombre: '',
    Responsable: '',
    Capacidad: 0,
    Capacidad2: 0,
    UnidadMedida: '',
    Estado: 0,
    idCentroDistribucion: 0,
  };
  
      idinv = 0;
      onChange1($event) {

        for (let inve of this.inv) {
    
          if (this.idinv == inve.idInventario) {
            this.id1 = inve.idInventario;
            console.log("IGUAl", this.id1);
            this.Service.getinventarioid(this.id1.toString()).subscribe(res => {
              this.inventario = Object(res);
              console.log(this.inventario);
            }, err => {
              console.log(err);
            });
    
          }
        }
    
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

  showMenssage5() {
    Swal.fire({
      title: 'Advertencia',
      text: 'La Cantidad ingresada supera la capacidad',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  onKey($event) {
    const Cantidadx = this.sal.cantidad;
    const cap = this.almacen.Capacidad;
    const cantidadinv = this.inventario.Cantidad;
    const cantidadsuma = Cantidadx + cantidadinv;
    if (cantidadsuma >= cap) {
      this.showMenssage5();
    }
  }
  onKey2($event) {
    const Cantidadx = this.sal.cantidad2;
    const cap2 = this.almacen.Capacidad2;
    const cantidadinv = this.inventario.Cantidad2;
    const cantidadsuma = Cantidadx + cantidadinv;
    if (cantidadsuma >= cap2) {
      this.showMenssage5();
    }
  }

  habilitado = true;
  onChange3($event) {
    
    console.log(this.sal.unidad);
    console.log("entro");
    if(this.sal.unidad == "g y ml"){
      
      this.habilitado = false;
      console.log(this.habilitado);
    }else if (this.sal.unidad == "g") {
      this.habilitado = true;
    }else if (this.sal.unidad == "ml") {
      this.habilitado = true;
    }
  }


}
