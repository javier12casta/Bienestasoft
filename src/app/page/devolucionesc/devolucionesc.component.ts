import { Component, OnInit } from '@angular/core';
import { Devoluciones } from 'src/app/interfaces/devoluciones';
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
  selector: 'app-devolucionesc',
  templateUrl: './devolucionesc.component.html',
  styleUrls: ['./devolucionesc.component.css']
})
export class DevolucionescComponent implements OnInit {

  devolucion: Devoluciones[] = [];
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];
  Referencias: string[] = ["Granular", "Liquida"];
  refe = {
    referencia: '',
  };


  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService, 
    private router:Router,
    private fb: FormBuilder
    ) { }

    sal: Devoluciones = {
      lote  : '',
      fechavencimiento  : null,
      unidad  : '',
      fecharegistro  : null,
      idCentroDistribucionOrigen  : null,
      idCentroDistribucionDestino  : null,
      idAlmacenes  : null,
      idTipoBienesterina  : null,
      motivo : '',
      cantidad: null,
      idAlmacenesDestino: null,
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
  almacen2: Almacen = {
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
    } else if(this.dev.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.dev.value);
  }



  ngOnInit() {

    this.Service.getTipobienestarina()
    .subscribe(async (data) => {
      this.tip = data;
      console.log('Referencia',this.tip);
      console.log('funciona');
    }
    );

    this.Service.getcentrodistribucion()
      .subscribe(async (data) => {
        this.cen = data;
        console.log('Centro distribucion',data);
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
        Referencia: ['', Validators.required],
        idCentroDistribucionOrigen: ['', Validators.required],
        idCentroDistribucionDestino: ['', Validators.required],
        idAlmacenes2: ['', Validators.required],
        idAlmacenesDestino: ['', Validators.required],
        lote: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z]*$')]],
        cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        fechavencimiento: ['', Validators.required],
        fecharegistro: ['', Validators.required],
        unidad:['', [Validators.required]],
        motivo: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z á é í ó ú]*$')]],
      });

  }

  get f() { return this.dev.controls; }

  onClickMe(){

    this.Service.postdevoluciones(this.sal).subscribe(res => {
      console.log(this.sal);
      this.Service.putinventario(this.sal.idAlmacenes, this.inventario1).subscribe( res => {});
      this.Service.putinventario(this.sal.idAlmacenesDestino, this.inventario2).subscribe( res => {});
      this.showMenssage();
      },
      err => {
        console.log(err);
      });
  }

  sumaResta(){
    var can = Number(this.sal.cantidad);
    var cant1 = Number(this.inventario1.cantidaddevuelta);
    var cant2 = Number(this.inventario1.cantidaddevueltaml);
    var cant3 = Number(this.inventario2.cantidaddevuelta);
    var cant4 = Number(this.inventario2.cantidaddevueltaml);
    if(this.granular == true){
      if(this.inventario2.cantidaddevuelta == 0 || this.inventario2.cantidaddevuelta == null){
        this.inventario2.cantidaddevuelta = cant3 + can;
      }else if (this.inventario2.cantidaddevuelta !== 0 || this.inventario2.cantidaddevuelta !== null){
        this.inventario1.cantidaddevuelta = cant1 - can;
        this.inventario2.cantidaddevuelta = cant3 + can;
      }
    }else if(this.liquida == true){

      if(this.inventario2.cantidaddevuelta == 0 || this.inventario2.cantidaddevuelta == null){
        this.inventario2.cantidaddevueltaml = cant3 + can;
      }else if (this.inventario2.cantidaddevuelta !== 0 || this.inventario2.cantidaddevuelta !== null){
        this.inventario1.cantidaddevueltaml = cant2 - can;
        this.inventario2.cantidaddevueltaml = cant4 + can;
      }

    }
  }

  tiporef: TipoBienestarina = {
    idTipoBienesterina: 0,
    TipoBienesterina : '',
    Codigo : 0,
    Estado : 1,
    Referencia : '',
    UnidadPrincipal : '',
    Cantidad : 0,
    cantidad2: 0,
    UnidadSecundaria: '',

  };

  inventario1: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
    cantidaddevuelta: null,
    cantidaddevueltaml:null,
  };
  inventario2: Inventario = {
    idInventario: null,
    Nombre: '',
    Cantidad: null,
    Cantidad2: null,
    unidad: '',
    cantidaddevuelta: null,
    cantidaddevueltaml:null,
  };

  traerAlmacen() {
    if (this.sal.idAlmacenes !== 0 || this.sal.idAlmacenes !== null) {

      this.Service.getalmacenid(this.sal.idAlmacenes.toString()).subscribe(async res => {
        this.almacen = Object(res);
        this.sal.idCentroDistribucionOrigen = this.almacen.idCentroDistribucion;
        console.log('centro distribucion id', this.sal.idCentroDistribucionOrigen);
        setTimeout(() => { this.valAlmacen() }, 1000);
      }, err => {
        console.log(err);
      });


      this.Service.getinventarioid(this.sal.idAlmacenes.toString()).subscribe(res => {
        this.inventario1 = Object(res);
        console.log('inventario origen', this.inventario1);
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

  showMenssage6() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El ' + this.almacen.Nombre + ' no dispone de ese tipo de referencia',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
    val2 = false;
   traerAlmacen2() {
    if (this.sal.idAlmacenesDestino !== 0 && this.sal.idAlmacenesDestino !== null) {
      if (this.sal.idAlmacenes == this.sal.idAlmacenesDestino) {
        this.showMenssageAlmacen();
        this.val2 = false;
      } else if (this.sal.idAlmacenes !== this.sal.idAlmacenesDestino) {
        this.val2 = true;
        this.Service.getalmacenid(this.sal.idAlmacenesDestino.toString()).subscribe(res => {
          this.almacen2 = Object(res);
          this.sal.idCentroDistribucionDestino = this.almacen2.idCentroDistribucion;
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

  val1 = false;
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

  showMenssage7() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El ' + this.almacen2.Nombre + ' no puede almacenar de ese tipo de referencia',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssageAlmacen() {
    Swal.fire({
      title: 'Advertencia',
      text: 'El almacen debe ser diferente al de origen',
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
      this.sal.unidad = this.tiporef.UnidadPrincipal;

      if (this.tiporef.Referencia == "Granular" || this.tiporef.Referencia == "granular") {
        this.refe.referencia = this.tiporef.Referencia;
        this.granular = true;
        this.liquida = false;
        if (this.sal.idAlmacenes !== 0 && this.sal.idAlmacenes != null) {
          this.valAlmacen();
          if (this.sal.idAlmacenesDestino !== 0 || this.sal.idAlmacenesDestino !== null) {
            this.valAlmacen2();
          }
        }


      } else if (this.tiporef.Referencia == "Liquida" || this.tiporef.Referencia == "liquida") {
        this.refe.referencia = this.tiporef.Referencia;
        this.granular = false;
        this.liquida = true;
        if (this.sal.idAlmacenes !== 0 && this.sal.idAlmacenes !== null) {
          this.valAlmacen();
          if (this.sal.idAlmacenesDestino !== 0 || this.sal.idAlmacenesDestino !== null) {
            this.valAlmacen2();
          }
        }
      }
    });
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Devolución Creada',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/devoluciones']);
    
      }
    });
  }
  val3 = false;
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

    //mensaje de la capacidad
    showMenssage5() {
      Swal.fire({
        title: 'Advertencia',
        text: 'La cantidad ingresada supera la capacidad del ' + this.almacen2.Nombre,
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
