import { Component, OnInit } from '@angular/core';
import { Translado } from 'src/app/interfaces/traslado';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';
import { Inventario } from 'src/app/interfaces/inventario';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-trasladoc',
  templateUrl: './trasladoc.component.html',
  styleUrls: ['./trasladoc.component.css']
})
export class TrasladocComponent implements OnInit {

  translado: Translado[] = [];

  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router: Router,
    private fb: FormBuilder
  ) { }
  sal: Translado = {
    lote: '',
    fechavencimiento: null,
    unidad: '',
    fecharegistro: null,
    idTipoBienesterina: null,
    idCentroDistribucion: null,
    idAlmacenesOrigen: null,
    idAlmacenesDestino: null,
    cantidad: null,
  };


  //----Validaciones de campos
  dev: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dev.valid) {
      this.sumaResta();
      if(this.val == true && this.val1 == true && this.val2 == true && this.val3 == true){
        this.onClickMe();
      }else if(this.val == false){
        this.showMenssage6();
      }else if(this.val1 == false){
        this.showMenssage7();
      }else if (this.val2 == true){
        this.showMenssageAlmacen();
      }else if(this.val3 == true){
        this.showMenssage5();
      }
      
    } else if (this.dev.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.dev.value);
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

    this.dev = this.fb.group({
      idTipoBienesterina: ['', Validators.required],
      idCentroDistribucionOrigen: ['', Validators.required],
      idAlmacenesDestino: ['', Validators.required],
      idAlmacenesOrigen: ['', Validators.required],
      lote: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z]*$')]],
      fechavencimiento: ['', Validators.required],
      fecharegistro: ['', Validators.required],
      unidad: ['', [Validators.required]],
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  get f() { return this.dev.controls; }
// para hacer cumplir las validaciones
  val = false;
  val1 = false;
  val2 = false;
  val3 = false;

  onClickMe() {

    this.Service.postraslados(this.sal).subscribe(res => {
      console.log(this.sal);
      this.Service.putinventario(this.sal.idAlmacenesOrigen, this.inventario1).subscribe( res => {});
      this.Service.putinventario(this.sal.idAlmacenesDestino, this.inventario2).subscribe( res => {});
      this.showMenssage();
      
    }, err => {
      console.log(err);
    });
  }

  sumaResta(){
    var can = Number(this.sal.cantidad);
    var cant1 = Number(this.inventario1.Cantidad);
    var cant2 = Number(this.inventario1.Cantidad2);
    var cant3 = Number(this.inventario2.Cantidad);
    var cant4 = Number(this.inventario2.Cantidad2);
    if(this.granular == true){
      this.inventario1.Cantidad = cant1 - can;
      this.inventario2.Cantidad = cant3 + can;
    }else if(this.liquida == true){
      this.inventario1.Cantidad2 = cant2 - can;
      this.inventario2.Cantidad2 = cant4 + can;
    }
  }

  tiporef: TipoBienestarina = {
    idTipoBienesterina: 0,
    TipoBienesterina: '',
    Codigo: 0,
    Estado: 1,
    Referencia: '',
    UnidadPrincipal: '',
    Cantidad: 0,
    cantidad2: 0,
    UnidadSecundaria: '',
  };

  inventario1: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
    cantidaddevueltaml: null,
    cantidaddevuelta: null,
  };
  inventario2: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
    cantidaddevueltaml: null,
    cantidaddevuelta: null,
  };



  traerAlmacen() {
    if (this.sal.idAlmacenesOrigen !== 0 || this.sal.idAlmacenesOrigen !== null) {

      this.Service.getalmacenid(this.sal.idAlmacenesOrigen.toString()).subscribe(async res => {
        this.almacen = Object(res);
        this.sal.idCentroDistribucion = this.almacen.idCentroDistribucion;
        console.log('centro distribucion id', this.sal.idCentroDistribucion);
        setTimeout(() => { this.valAlmacen() }, 1000);
      }, err => {
        console.log(err);
      });


      this.Service.getinventarioid(this.sal.idAlmacenesOrigen.toString()).subscribe(res => {
        this.inventario1 = Object(res);
        console.log('inventario origen', this.inventario1);
        if (this.granular == true) {
          this.cantidadEx = this.inventario1.Cantidad;
        } else if (this.liquida == true) {
          this.cantidadEx = this.inventario1.Cantidad2;
        }
      }, err => {
        console.log(err);
      });
    }

  }

  valAlmacen() {
    if (this.sal.idAlmacenesOrigen !== 0 || this.sal.idAlmacenesOrigen !== null) {
      if (this.granular == true) {
        if (this.almacen.Capacidad == 0) {
          this.showMenssage6();
          this.val = false;
        }else {
          this.val = true;
        }
      } else if (this.liquida == true) {
        if (this.almacen.Capacidad2 == 0) {
          this.showMenssage6();
          this.val = false;
        }else {
          this.val = true;
        }
      }
    }
  }

  traerAlmacen2() {
    if (this.sal.idAlmacenesDestino !== 0 && this.sal.idAlmacenesDestino !== null) {
      if (this.sal.idAlmacenesOrigen == this.sal.idAlmacenesDestino) {
        this.showMenssageAlmacen();
        this.val2 = false;
      } else if (this.sal.idAlmacenesOrigen !== this.sal.idAlmacenesDestino) {
        this.val2 = true;
        this.Service.getalmacenid(this.sal.idAlmacenesDestino.toString()).subscribe(res => {
          this.almacen2 = Object(res);
          setTimeout(() => { this.valAlmacen() }, 1000);
        }, err => {
          console.log(err);
        });

        this.Service.getinventarioid(this.sal.idAlmacenesDestino.toString()).subscribe(res => {
          this.inventario2 = Object(res);
          console.log('inventario destino', this.inventario2);
          this.Referencia();
        }, err => {
          console.log(err);
        });

      }
    }
  }

  valAlmacen2() {
    if (this.sal.idAlmacenesDestino !== 0 && this.sal.idAlmacenesDestino !== null) {
      if (this.granular == true) {
        if (this.almacen2.Capacidad == 0) {
          this.showMenssage7();
          this.val1 = false;
        }else{
          this.val1 = true;
        }
      } else if (this.liquida == true) {
        if (this.almacen2.Capacidad2 == 0) {
          this.showMenssage7();
          this.val1 = false;
        }else{
          this.val1 = true;
        }
      }
    }
  }

  showMenssageAlmacen() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El almacen debe ser diferente al de origen',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  cantidadEx: number;
  Referencia() {
    this.Service.getTipobienestarinaid(this.sal.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia', res);
      this.sal.unidad = this.tiporef.UnidadPrincipal;

      if (this.tiporef.Referencia == "Granular" || this.tiporef.Referencia == "granular") {
        this.cantidadEx = this.inventario1.Cantidad;
        this.granular = true;
        this.liquida = false;
        if (this.sal.idAlmacenesOrigen !== 0 && this.sal.idAlmacenesOrigen != null) {
          this.valAlmacen();
          if (this.sal.idAlmacenesDestino !== 0 || this.sal.idAlmacenesDestino !== null) {
            this.valAlmacen2();
          }
        }


      } else if (this.tiporef.Referencia == "Liquida" || this.tiporef.Referencia == "liquida") {
        this.cantidadEx = this.inventario1.Cantidad2;
        this.granular = false;
        this.liquida = true;
        if (this.sal.idAlmacenesOrigen !== 0 && this.sal.idAlmacenesOrigen !== null) {
          this.valAlmacen();
          if (this.sal.idAlmacenesDestino !== 0 || this.sal.idAlmacenesDestino !== null) {
            this.valAlmacen2();
          }
        }
      }
    });
  }

  //mensaje capacidad referencia
  showMenssage6() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El ' + this.almacen.Nombre + ' no dispone de ese tipo de referencia',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
  showMenssage7() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El ' + this.almacen2.Nombre + ' no puede almacenar de ese tipo de referencia',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  //mensaje de la capacidad
  showMenssage5() {
    Swal.fire({
      title: 'Advertencia',
      text: 'La cantidad ingresada supera la capacidad del ' + this.almacen2.Nombre,
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  //para la capacidad almacen
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
  public almacen2: Almacen = {
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

  granular = false;
  liquida = false;

  onKey($event) {
    if (this.granular == true) {
      var cap = this.almacen2.Capacidad;
      //console.log('Capacidad almacen 2', cap);
      var can = Number(this.sal.cantidad);
      var devolucion = Number(this.inventario2.cantidaddevuelta);
      var cantidadinv = Number(this.inventario2.Cantidad);
      var cantidadsuma = Number(cantidadinv + can + devolucion);
      console.log('suma', cantidadsuma);
      if (cantidadsuma > cap) {
        this.showMenssage5();
        this.val3 = false;
      }else{
        this.val3 = true;
      }
    } else if (this.liquida == true) {
      var cap = this.almacen2.Capacidad2;
      //console.log('Capacidad almacen 2', cap);
      var can = Number(this.sal.cantidad);
      var devolucion2 = Number(this.inventario2.cantidaddevueltaml);
      var cantidadinv = Number(this.inventario2.Cantidad2);
      var cantidadsuma = Number(cantidadinv + can + devolucion2);
      console.log('suma', cantidadsuma);
      if (cantidadsuma > cap) {
        this.showMenssage5();
        this.val3 = false;
      }else{
        this.val3 = true;
      }
    }
  }


  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Traslado creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/traslado']);

      }
    });
  }

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}
