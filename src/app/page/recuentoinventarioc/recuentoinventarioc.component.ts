import { Component, OnInit } from '@angular/core';
import { Recuentoinventario } from 'src/app/interfaces/recuentoinventario';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';
import { Inventario } from '../../interfaces/inventario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
  unidadmedida = ["bolsa","caja"];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router, private fb: FormBuilder) { }


    sal: Recuentoinventario = {
      lote : null,
      FechaVencimiento : null,
      unidadmedida1  : '',
      cantidad: null,
      cantidadcontada: null,
      unidadmedida2  : '',
      idTipoBienesterina: null,
      idAlmacenes: null,
      idCentroDistribucion: null,
    } 

    tiporef: TipoBienestarina = {
      idTipoBienesterina: 0,
      TipoBienesterina : '',
      Codigo : 0,
      Estado : '',
      Referencia : '',
      UnidadPrincipal : '',
      Cantidad : 0,
      cantidad2: 0,
      UnidadSecundaria: '',
  
    };

    //----Validaciones de campos
  rec: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.rec.valid) {
      if(this.val === true){
        this.onClickMe();
      }else if(this.val == false){
        this.showMenssage6();
      }
        
      
    } else if(this.rec.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.rec.value);
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

      this.rec = this.fb.group({
        lote : ['', [Validators.required, Validators.pattern('^[a-z 0-9 A-Z]*$')]],
        FechaVencimiento : ['', Validators.required],
        unidadmedida1  : ['', Validators.required],
        cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        cantidadcontada: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        //unidadmedida2  : ['', Validators.required],
        idTipoBienesterina: ['', Validators.required],
        idAlmacenes: ['', Validators.required],
        idCentroDistribucion: ['', Validators.required],
        });

  }
  get f() { return this.rec.controls; }

  onClickMe(){

    
    this.Service.postrecuento(this.sal).subscribe(res => {
      console.log(this.sal);
      this.showMenssage();
      
      },
      err => {
        console.log(err);
      });
      
     
     

  }

  inventario: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
  };

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

  traerAlmacen() {
    if (this.sal.idAlmacenes !== 0 || this.sal.idAlmacenes !== null) {

      this.Service.getalmacenid(this.sal.idAlmacenes.toString()).subscribe(async res => {
        this.almacen = Object(res);
        this.sal.idCentroDistribucion = this.almacen.idCentroDistribucion;
        console.log('centro distribucion id', this.sal.idCentroDistribucion);
        setTimeout(() => { this.valAlmacen() }, 1000);
      }, err => {
        console.log(err);
      });


      this.Service.getinventarioid(this.sal.idAlmacenes.toString()).subscribe(res => {
        this.inventario = Object(res);
        console.log('inventario origen', this.inventario);
        if (this.granular == true) {
          this.sal.cantidad = this.inventario.Cantidad;
        } else if (this.liquida == true) {
          this.sal.cantidad = this.inventario.Cantidad2;
        }
      }, err => {
        console.log(err);
      });
    }

  }
  val = false;

  valAlmacen() {
    if (this.sal.idAlmacenes !== 0 || this.sal.idAlmacenes !== null) {
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

    //mensaje capacidad referencia
    showMenssage6() {
      Swal.fire({
        title: 'Advertencia',
        text: 'El ' + this.almacen.Nombre + ' no dispone de ese tipo de referencia',
        type: 'warning',
        confirmButtonText: 'Entendido'
      });
    }

  granular = false;
  liquida = false;
  Referencia() {
    this.Service.getTipobienestarinaid(this.sal.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia', res);
      this.sal.unidadmedida1 = this.tiporef.UnidadPrincipal;
      this.sal.unidadmedida2 = this.tiporef.UnidadSecundaria;

      if (this.tiporef.Referencia == "Granular" || this.tiporef.Referencia == "granular") {
        this.sal.unidadmedida1 = this.tiporef.UnidadPrincipal;
        this.granular = true;
        this.liquida = false;


      } else if (this.tiporef.Referencia == "Liquida" || this.tiporef.Referencia == "liquida") {
        this.sal.unidadmedida1 = this.tiporef.UnidadPrincipal;
        this.sal.unidadmedida2 = this.tiporef.UnidadSecundaria;
        this.granular = false;
        this.liquida = true;
        
      }
    });
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Recuento creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/recuentoinventario']);
    
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
