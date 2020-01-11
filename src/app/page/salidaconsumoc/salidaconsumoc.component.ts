import { Component, OnInit } from '@angular/core';
import { Salidaconsumo } from 'src/app/interfaces/salidaconsumo';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';
import { Inventario } from 'src/app/interfaces/inventario';


@Component({
  selector: 'app-salidaconsumoc',
  templateUrl: './salidaconsumoc.component.html',
  styleUrls: ['./salidaconsumoc.component.css']
})
export class SalidaconsumocComponent implements OnInit {

  salidacentro: Salidaconsumo[] = [];
  public inv: Inventario[] = [];
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];
  Referencias: string[] = ["Granular", "Liquida"];
  refe = {
    referencia: '',
  };
  unidadmedida = ["Bolsa", "Caja"];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router: Router, private fb: FormBuilder) { }

  //para las operaciones capacidad
  public inventario: Inventario = {
    idInventario: 0,
    Nombre: '',
    Cantidad: 0,
    Cantidad2: 0,
    unidad: '',
  };

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

  sal: Salidaconsumo = {

    lote: '',
    fechavencimiento: null,
    cantidad: null,
    cantidad2: null,
    unidad: '',
    fecharegistro: null,
    idTipoBienesterina: null,
    idCentroDistribucion: null,
    idAlmacenes: null,


  };

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
  idinv = 0;

  //----Validaciones de campos
  czForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.czForm.valid) {

      this.suma();
      if (this.val == true && this.val1 == true) {
        console.log('Entro');
        this.onClickMe();
      } else if (this.val == false) {
        this.showMenssage6();
      } else if (this.val1 == false) {
        this.showMenssage5();
      }

    } else if (this.czForm.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.czForm.value);
  }

  onClickMe() {
    this.Service.postsalidaconsumo(this.sal).subscribe(res => {
      console.log(this.sal);
      this.Service.putinventario(this.sal.idAlmacenes, this.inventario).subscribe(res => { });
      this.showMenssage();
    },
      err => {
        console.log(err);
      });
  }

  suma() {
    var cantidad = Number(this.sal.cantidad);
    var can = Number(this.inventario.Cantidad);
    var cantidad2 = Number(this.sal.cantidad);
    var can2 = Number(this.inventario.Cantidad2);
    if (this.granular == true) {
      this.inventario.Cantidad = can - cantidad;
      console.log('cantidad granular', this.inventario.Cantidad);
    } else if (this.liquida == true) {
      this.inventario.Cantidad2 = can2 - cantidad2;
      console.log('cantidad liquida', this.inventario.Cantidad2);
    }
  }

  ngOnInit() {


    this.czForm = this.fb.group({


      lote: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
      fechavencimiento: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      unidad: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      fecharegistro: ['', Validators.required],
      idTipoBienesterina: ['', Validators.required],
      idCentroDistribucion: ['', Validators.required],
      idAlmacenes: ['', Validators.required],
      Referencia: ['', Validators.required],
    });


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
        //console.log(data);
        //console.log('funciona');
      }
      );

  }

  onReset() {
    this.submitted = false;
    this.czForm.reset();
  }

  get f() { return this.czForm.controls; }

  granular = false;
  liquida = false;
  Referencia() {
    this.Service.getTipobienestarinaid(this.sal.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia', res);
      this.sal.unidad = this.tiporef.UnidadPrincipal;
      if (this.tiporef.Referencia == "Granular" || this.tiporef.Referencia == "granular") {
        this.refe.referencia = this.tiporef.Referencia;
        this.granular = true;
        this.liquida = false;
        if (this.sal.idAlmacenes !== 0 && this.sal.idAlmacenes != null) {
          this.valAlmacen();
        }
      } else if (this.tiporef.Referencia == "Liquida" || this.tiporef.Referencia == "liquida") {
        this.refe.referencia = this.tiporef.Referencia;
        this.granular = false;
        this.liquida = true;
        if (this.sal.idAlmacenes !== 0 && this.sal.idAlmacenes !== null) {
          this.valAlmacen();
        }
      }
    });
  }

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
        } else {
          this.val = true;
        }
      } else if (this.liquida == true) {
        if (this.almacen.Capacidad2 == 0) {
          this.showMenssage6();
          this.val = false;
        } else {
          this.val = true;
        }
      }
    }
  }

  //mensaje capacidad referencia
  showMenssage6() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El ' + this.almacen.Nombre + ' no dispone ese tipo de referencia',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  val1 = false;
  onKey($event) {
    if (this.granular == true) {
      var can = Number(this.sal.cantidad);
      var cantidadinv = Number(this.inventario.Cantidad);
      console.log('suma', can);
      if (cantidadinv == 0) {
        this.showMenssagevacio();
      }
      else if (can > cantidadinv) {
        this.showMenssage5();
        this.val1 = false;
      } else {
        this.val1 = true;
      }
    } else if (this.liquida == true) {
      var can = Number(this.sal.cantidad2);
      var cantidadinv = Number(this.inventario.Cantidad2);
      console.log('suma', can);
      if (cantidadinv == 0) {
        this.showMenssagevacio();
      }
      else if (can > cantidadinv) {
        this.showMenssage5();
        this.val1 = false;
      } else {
        this.val1 = true;
      }
    }
  }

  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Salida para consumo creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/salidaconsumo']);

      }
    });
  }

  //mensaje de la capacidad
  showMenssage5() {
    Swal.fire({
      title: 'Advertencia',
      text: 'La cantidad ingresada supera la cantidad existente en el inventario',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssagevacio() {
    Swal.fire({
      title: 'Advertencia',
      text: 'No hay existencias de la referenia seleccionada',
      type: 'warning',
      confirmButtonText: 'Entendido'
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
