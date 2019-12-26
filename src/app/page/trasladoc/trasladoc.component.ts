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
      this.onClickMe();
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

  onClickMe() {
    this.Service.postraslados(this.sal).subscribe(res => {
      console.log(this.sal);
      this.showMenssage();

    },
      err => {
        console.log(err);
      });
  }

  tiporef: TipoBienestarina = {
    idTipoBienesterina: 0,
    TipoBienesterina: '',
    Codigo: 0,
    Estado: '',
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
  };
  inventario2: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
  };


  traerAlmacen() {
    this.Service.getinventarioid(this.sal.idAlmacenesOrigen.toString()).subscribe(res => {
      this.inventario1 = Object(res);
      console.log('inventario origen', this.inventario1);
      this.Referencia();
    }, err => {
      console.log(err);
    });
  }

  Referencia() {
    this.Service.getTipobienestarinaid(this.sal.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia', res);
      this.sal.unidad = this.tiporef.UnidadPrincipal;

      if(this.tiporef.Referencia == "Granular"){
        this.sal.cantidad = this.inventario1.Cantidad;
      }else if(this.tiporef.Referencia = "Liquida"){
        this.sal.cantidad = this.inventario1.Cantidad2;
      }
    });
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
