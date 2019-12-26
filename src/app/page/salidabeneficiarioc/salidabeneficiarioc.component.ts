import { Component, OnInit } from '@angular/core';
import { Salidabeneficiario } from 'src/app/interfaces/salidabeneficiario';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { Almacen } from '../../interfaces/almacen';
import { Acudientes } from '../../interfaces/acudiente';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Inventario } from 'src/app/interfaces/inventario';

@Component({
  selector: 'app-salidabeneficiarioc',
  templateUrl: './salidabeneficiarioc.component.html',
  styleUrls: ['./salidabeneficiarioc.component.css']
})
export class SalidabeneficiariocComponent implements OnInit {

  salidabeneficiario: Salidabeneficiario[] = [];

  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public inv: Inventario[] = [];
  public alm: Almacen[] = [];
  public ben: Beneficiario[] = [];
  public acu: Acudientes[] = [];
  unidadmedida = ["bolsa","caja"];
  u;
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

  sal: Salidabeneficiario = {

    lote: '',
    fechavencimiento: 0,
    cantidad: 0,
    Cantidad2: 0,
    unidad: '',
    idAcudientes: 0,
    idBeneficiarios: 0,
    idCentroDistribucion: 0,
    idAlmacenes: 0,
    idTipoBienesterina: 0,

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
  
      this.onClickMe();
    
  } else if(this.czForm.invalid) {
    this.showMenssagenull();
  }

  // display form values on success
  console.log('Formulario', this.czForm.value);
}

  ngOnInit() {

    this.czForm = this.fb.group({
      
    lote :['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
    fechavencimiento : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
    cantidad  : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    unidad : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
    idAcudientes : ['', Validators.required],
    idBeneficiarios:['', Validators.required],
    idCentroDistribucion : ['', Validators.required],
    idAlmacenes  : ['', Validators.required],
    idTipoBienesterina : ['', Validators.required],
    Cantidad2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],

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

    this.Service.getAcudientes()
      .subscribe(async (data) => {
        this.acu = data;
        console.log(data);
        console.log('funciona');
      }
      );

    this.Service.getBeneficiarios()
      .subscribe(async (data) => {
        this.ben = data;
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

  Referencia  (){
    this.Service.getTipobienestarinaid(this.sal.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia',res);
      this.sal.unidad = this.tiporef.UnidadPrincipal;
    });
  }


  onClickMe() {

    // para restar al inventario
    const cantidad = this.sal.cantidad;
    const cantidad2 = this.sal.Cantidad2;
    this.inventario.Cantidad = this.inventario.Cantidad - cantidad;
    this.inventario.Cantidad2 = this.inventario.Cantidad2 - cantidad2;
    console.log('Cantidad inventario', this.inventario.Cantidad);
    this.Service.putinventario(this.idinv, this.inventario).subscribe(res => {

    }, err => {
      console.log(err);
    });
    //--------------------------------------------------------------

    this.Service.postsalidabeneficiario(this.sal).subscribe(res => {
      console.log(this.sal);
      this.showMenssage();

    },
      err => {
        console.log(err);
      });
  }

  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Salida beneficiario creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/salidabeneficiario']);

      }
    });
  }

  //mensaje de la capacidad
  showMenssage5() {
    Swal.fire({
      title: 'Advertencia',
      text: 'La cantidad ingresada supera la capacidad',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
  //Para saber que digita en el campo cantidad
  onKey($event) {
    const Cantidadx = this.sal.cantidad;
    const cap = this.almacen.Capacidad;
    const cantidadinv = this.inventario.Cantidad;
    const cantidadsuma = Cantidadx;
    if (cantidadsuma >= cantidadinv) {
      this.showMenssage5();
    }
  }

  //para saber que digita en la cantidad2
  onKey2($event) {
    const Cantidadx = this.sal.Cantidad2;
    const cantidadinv = this.inventario.Cantidad2;
    const cantidadsuma = Cantidadx;
    console.log('inv', cantidadinv);
    if (cantidadsuma >= cantidadinv) {
      this.showMenssage5();
    }
  }
  //saber que almacen selecciono y cargar la unidad de medida
  onChange($event) {

    for (let al of this.alm) {

      if (this.sal.idAlmacenes == al.idAlmacenes) {
        const id = this.sal.idAlmacenes;
        // console.log("IGUAl", id);
        this.Service.getalmacenid(id.toString()).subscribe(res => {
          this.almacen = Object(res);
          console.log(this.almacen);
          /*         if(this.almacen.UnidadMedida == "g"){
                    console.log('entro g');
                    this.unidadmedida.pop();
                    this.unidadmedida.push('g');
                  }else if(this.almacen.UnidadMedida == "ml"){
                    this.unidadmedida.pop();
                    this.unidadmedida.push("ml");
                  }else if (this.almacen.UnidadMedida == "g y ml"){
                    this.unidadmedida.pop();
                    this.unidadmedida.push("g y ml");
                  } */
        }, err => {
          console.log(err);
        });

      }
    }
  }


  onChange1($event) {
    console.log(this.sal);

    for (let al of this.inv) {

      if (this.idinv == al.idInventario) {
        console.log("IGUAl", this.idinv);
        this.Service.getinventarioid(this.idinv.toString()).subscribe(res => {
          this.inventario = Object(res);
          console.log(this.inventario);
          if (this.inventario.unidad == "g") {
            this.unidadmedida.pop();
            this.unidadmedida.pop();
            this.unidadmedida.push('');
            this.unidadmedida.push('g');
          } else if (this.inventario.unidad == "ml") {
            this.unidadmedida.pop();
            this.unidadmedida.pop();
            this.unidadmedida.push('');
            this.unidadmedida.push("ml");
          } else if (this.inventario.unidad == "g y ml") {
            this.unidadmedida.pop();
            this.unidadmedida.pop();
            this.unidadmedida.push('');
            this.unidadmedida.push("g y ml");
          }

        }, err => {
          console.log(err);
        });

      }
    }
  }


  habilitado = true;
  onChange3($event) {
    console.log(this.sal.unidad);
    if (this.sal.unidad == "g y ml") {
     // console.log("entro");
      this.habilitado = false;
      console.log(this.habilitado);
    } else if (this.sal.unidad == "g") {
      this.habilitado = true;
    } else if (this.sal.unidad == "ml") {
      this.habilitado = true;
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


  unidad(){

    

    for(let ud of this.tip){

      if(ud.TipoBienesterina == "Granular"){

        this.u=0;
  
      }else{
  
       this.u=1;
      }

    }

    if(this.u == 0){

      this.unidadmedida.pop();
      this.unidadmedida.push("g");

    }else{

       this.unidadmedida.pop();
      this.unidadmedida.push("ml");
    }
    
 

  }
  
}
