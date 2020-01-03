import { Component, OnInit } from '@angular/core';
import { Salidacentro } from 'src/app/interfaces/salidacentro';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Inventario } from '../../interfaces/inventario';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
  unidadmedida = ["bolsa","caja"];

  //para las operaciones capacidad
  public inventario1: Inventario = {
    idInventario: 0,
    Nombre: '',
    Cantidad: 0,
    Cantidad2: 0,
    unidad: '',
  };

  public inventario2: Inventario = {
    idInventario: 0,
    Nombre: '',
    Cantidad: 0,
    Cantidad2: 0,
    unidad: '',
  };


  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router, private fb: FormBuilder) { }

    sal: Salidacentro = {
      lote  : '',
      fechavencimiento  : null,
      cantidad  : null,
      cantidad2 : null,
      unidad  : '',
      fecharegistro  : null,
      idCentroDistribucionOrigen  : null,
      idCentroDistribucionDestino  : null,
      idAlmacen  : null,
      idTipoBienesterina  : null,
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
  
  idinv = 0;
    

  //----Validaciones de campos
  czForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.czForm.valid) {
    
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
    } else if(this.czForm.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.czForm.value);
  }

  ngOnInit() {


    //Validador--------------------
    this.czForm = this.fb.group({
      
    lote:['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
    fechavencimiento : ['', Validators.required],
    cantidad  :  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    unidad : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
    fecharegistro : ['', Validators.required],
    idCentroDistribucionOrigen:['', Validators.required],
    idCentroDistribucionDestino : ['', Validators.required],
    idAlmacen  : ['', Validators.required],
    idAlmacenesDestino: ['', Validators.required],
    idTipoBienesterina : ['', Validators.required],
    });


    this.Service.getTipobienestarina()
    .subscribe(async (data) => {
      this.tip = data;
      //console.log(data);
      //console.log('funciona');
    }
    );

    this.Service.getcentrodistribucion()
      .subscribe(async (data) => {
        this.cen = data;
       // console.log(data);
        //console.log('funciona');
      }
      );

      this.Service.getalmacen()
      .subscribe(async (data) => {
        this.alm = data;
        console.log("Almacen",data);
        //console.log('funciona');
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

  get f() { return this.czForm.controls; }
// para hacer cumplir las validaciones
  val = false;
  val1 = false;
  val2 = false;
  val3 = false;

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

  traerAlmacen() {
    if (this.sal.idAlmacen !== 0 || this.sal.idAlmacen !== null) {

      this.Service.getalmacenid(this.sal.idAlmacen.toString()).subscribe(async res => {
        this.almacen = Object(res);
        this.sal.idCentroDistribucionOrigen = this.almacen.idCentroDistribucion;
        console.log('centro distribucion id', this.sal.idCentroDistribucionOrigen);
        setTimeout(() => { this.valAlmacen() }, 1000);
      }, err => {
        console.log(err);
      });


      this.Service.getinventarioid(this.sal.idAlmacen.toString()).subscribe(res => {
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
    if (this.sal.idAlmacen !== 0 || this.sal.idAlmacen !== null) {
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
      if (this.sal.idAlmacen == this.sal.idAlmacenesDestino) {
        this.showMenssageAlmacen();
        this.val2 = false;
      } else if (this.sal.idAlmacen !== this.sal.idAlmacenesDestino) {
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
        if (this.sal.idAlmacen !== 0 && this.sal.idAlmacen != null) {
          this.valAlmacen();
          if (this.sal.idAlmacenesDestino !== 0 || this.sal.idAlmacenesDestino !== null) {
            this.valAlmacen2();
          }
        }


      } else if (this.tiporef.Referencia == "Liquida" || this.tiporef.Referencia == "liquida") {
        this.cantidadEx = this.inventario1.Cantidad2;
        this.granular = false;
        this.liquida = true;
        if (this.sal.idAlmacen!== 0 && this.sal.idAlmacen !== null) {
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



  onClickMe(){

    this.Service.postsalidacentro(this.sal).subscribe(res => {
      console.log(this.sal);
      this.Service.putinventario(this.sal.idAlmacen, this.inventario1).subscribe( res => {});
      this.Service.putinventario(this.sal.idAlmacenesDestino, this.inventario2).subscribe( res => {});
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Salida centro de distribución creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/salidacentro']);
    
      }
    });
  }


  showMenssage4(){
    Swal.fire({
      title: 'Creado',
      text: 'Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/salidacentro']);
    
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
//Para saber que digita en el campo cantidad

granular = false;
liquida = false;

onKey($event) {
  if (this.granular == true) {
    var can = Number(this.sal.cantidad);
    var cantidadinv = Number(this.inventario1.Cantidad);
    console.log('suma', can);
    if (can > cantidadinv) {
      this.showMenssage5();
      this.val3 = false;
    }else{
      this.val3 = true;
    }
  } else if (this.liquida == true) {
    var can = Number(this.sal.cantidad);
    var cantidadinv = Number(this.inventario1.Cantidad2);
    console.log('suma', can);
    if (can > cantidadinv) {
      this.showMenssage5();
      this.val3 = false;
    }else{
      this.val3 = true;
    }
  }
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
