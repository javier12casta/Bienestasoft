import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { Almacen } from 'src/app/interfaces/almacen';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { Inventario } from 'src/app/interfaces/inventario';
import { ServicioService } from 'src/app/servicio.service';
import { Recepcion } from 'src/app/interfaces/recepcion';
import { Acta } from 'src/app/interfaces/acta';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recepcionbienestarinavi',
  templateUrl: './recepcionbienestarinavi.component.html',
  styleUrls: ['./recepcionbienestarinavi.component.css']
})
export class RecepcionbienestarinaviComponent implements OnInit {

  public alm: Almacen[] = [];

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

  inventario1: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
    cantidaddevueltaml: null,
    cantidaddevuelta: null,
  };

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

  public cen: Centrodistribucion[] = [];
  public tip: TipoBienestarina[] = [];
  public inv: Inventario[] = [];
  //para las operaciones
  unidadmedida = ["bolsa", "caja"];
  public ac: Acta[] = [];
  cantidadrecp: number;
  id1 = 0;


  constructor(
    private Service: ServicioService,
    private router: Router,
    private fb: FormBuilder) { }

  x: Recepcion = {
    lote: '',
    FechaVencimiento: null,
    Cantidad: null,
    UnidadPrincipal: '',
    FechaRecepcion: null,
    idTipoBienesterina: null,
    idAlmacenes: null,
    idCentroDistribucion: null,
    idInventario: null,
  };

  y: Acta = {
    numero: null,
    idBienestarina: null,
  };

  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('formulario', this.x);
    console.log('validaciones', this.val1, this.val);
    // stop here if form is invalid
    if (this.RefForm.valid) {
      this.suma();
      if (this.val == true && this.val1 == true) {
        console.log('Entro');
        this.showMenssage4();
      } else if (this.val == false) {
        this.showMenssage6();
      } else if (this.val1 == false) {
        this.showMenssage5();
      }

    } else if (this.RefForm.invalid) {
      console.log();
      this.showMenssagenull();
    }
  }

  ngOnInit() {

    this.Service.getalmacen()
      .subscribe(res => {
        this.alm = res;
      }, err => {
        console.log(err);
      });

    this.Service.getcentrodistribucion()
      .subscribe(res => {
        this.cen = res;
      }, err => {
        console.log(err);
      });

    this.Service.getTipobienestarina()
      .subscribe(res => {
        this.tip = res;
      }, err => {
        console.log(err);
      });


    this.Service.getinventario()
      .subscribe(res => {
        this.inv = res;
      }, err => {
        console.log(err);
      });

          //Validador--------------------
    this.RefForm = this.fb.group({
      alma: ['', Validators.required],
      fecha: ['', Validators.required],
      Cd: ['', Validators.required],
      Tipob: ['', Validators.required],
      Lote: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.)]*$')]],
      fechav: ['', Validators.required],
      unidad: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Numero: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get f() { return this.RefForm.controls; }

  onClickMe() {

    this.Service.postrecepcion(this.x).subscribe(res => {
      console.log(this.x);
      this.Service.putinventario(this.x.idAlmacenes, this.inventario1).subscribe( res => {});
      this.showMenssage();
    },
      err => {
        console.log(err);
      });

    this.Service.postacta(this.y).subscribe(res => {
      console.log(this.y);
    },
      err => {
        console.log(err);
      });

  }

  suma(){
    var cantidad = Number(this.x.Cantidad);
    var can = Number(this.inventario1.Cantidad);
    var cantidad2 = Number(this.x.Cantidad);
    var can2 = Number(this.inventario1.Cantidad2);
    if(this.granular == true){
      this.inventario1.Cantidad = cantidad + can;
      console.log('cantidad granular',this.inventario1.Cantidad);
    }else if(this.liquida == true){
      this.inventario1.Cantidad2 = cantidad2 + can2;
      console.log('cantidad liquida',this.inventario1.Cantidad2);
    }
  }

  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Recepción creada',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/recepcionv']);
      }

    });
  }

  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'campos erroneos o vacios',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage4() {
    Swal.fire({
      title: 'Advertencia',
      text: '¿Esta seguro de registrar los datos?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#28a745',
    }).then((result) => {
      if (result.value) {
       this.onClickMe();
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

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos inválidos',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  granular = false;
  liquida = false;
  Referencia() {
    this.Service.getTipobienestarinaid(this.x.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia', res);
      this.x.UnidadPrincipal = this.tiporef.UnidadPrincipal;
      this.y.idBienestarina = this.x.idBienestarina;
      if (this.tiporef.Referencia == "Granular" || this.tiporef.Referencia == "granular") {
        this.granular = true;
        this.liquida = false;
        if (this.x.idAlmacenes !== 0 && this.x.idAlmacenes != null) {
          this.valAlmacen();
        }
      } else if (this.tiporef.Referencia == "Liquida" || this.tiporef.Referencia == "liquida") {
        this.granular = false;
        this.liquida = true;
        if (this.x.idAlmacenes !== 0 && this.x.idAlmacenes !== null) {
          this.valAlmacen();
        }
      }
    });
  }

  traerAlmacen() {
    if (this.x.idAlmacenes !== 0 || this.x.idAlmacenes !== null) {

      this.Service.getalmacenid(this.x.idAlmacenes.toString()).subscribe(async res => {
        this.almacen = Object(res);
        this.x.idCentroDistribucion = this.almacen.idCentroDistribucion;
        this.x.idInventario = this.almacen.idAlmacenes;
        console.log('centro distribucion id', this.x.idCentroDistribucion);
        setTimeout(() => { this.valAlmacen() }, 1000);
      }, err => {
        console.log(err);
      });


      this.Service.getinventarioid(this.x.idAlmacenes.toString()).subscribe(res => {
        this.inventario1 = Object(res);
        console.log('inventario origen', this.inventario1);
      }, err => {
        console.log(err);
      });
    }

  }
  val = false;
  valAlmacen() {
    if (this.x.idAlmacenes !== 0 || this.x.idAlmacenes !== null) {
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
      text: 'El ' + this.almacen.Nombre + ' no puede almacenar de ese tipo de referencia',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  val1 = false;
  onKey($event) {
    if (this.granular == true) {
      var cap = this.almacen.Capacidad;
      //console.log('Capacidad almacen 2', cap);
      var can = Number(this.x.Cantidad);
      var devolucion = Number(this.inventario1.cantidaddevuelta);
      var cantidadinv = Number(this.inventario1.Cantidad);
      var cantidadsuma = Number(cantidadinv + can + devolucion);
      console.log('suma', cantidadsuma);
      if (cantidadsuma > cap) {
        this.showMenssage5();
        this.val1 = false;
      } else {
        this.val1 = true;
      }
    } else if (this.liquida == true) {
      var cap = this.almacen.Capacidad2;
      //console.log('Capacidad almacen 2', cap);
      var can = Number(this.x.Cantidad);
      var devolucion2 = Number(this.inventario1.cantidaddevueltaml);
      var cantidadinv = Number(this.inventario1.Cantidad2);
      var cantidadsuma = Number(cantidadinv + can + devolucion2);
      console.log('suma', cantidadsuma);
      if (cantidadsuma > cap) {
        this.showMenssage5();
        this.val1 = false;
      } else {
        this.val1 = true;
      }
    }
  }


}
