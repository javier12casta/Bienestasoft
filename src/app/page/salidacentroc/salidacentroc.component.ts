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
  public inventario: Inventario = {
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
      cantidad  : 0,
      cantidad2 : 0,
      unidad  : '',
      fecharegistro  : null,
      idCentroDistribucionOrigen  : 0,
      idCentroDistribucionDestino  : 0,
      idAlmacen  : 0,
      idTipoBienesterina  : 0,
    
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


    //Validador--------------------
    this.czForm = this.fb.group({
      
    lote:['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
    fechavencimiento : ['', Validators.required],
    cantidad  :  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    cantidad2  :  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    unidad : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
    fecharegistro : ['', Validators.required],
    idCentroDistribucionOrigen:['', Validators.required],
    idCentroDistribucionDestino : ['', Validators.required],
    idAlmacen  : ['', Validators.required],
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


  onClickMe(){
    // para restar al inventario
    const cantidad = this.sal.cantidad;
    const cantidad2 = this.sal.cantidad2;
    this.inventario.Cantidad = this.inventario.Cantidad - cantidad;
    this.inventario.Cantidad2 = this.inventario.Cantidad2 - cantidad2;
    console.log('Cantidad inventario', this.inventario.Cantidad);
    this.Service.putinventario(this.idinv, this.inventario).subscribe(res => {

    }, err => {
      console.log(err);
    });
//--------------------------------------------------------------
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
      text: 'La cantidad ingresada supera la capacidad',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
//Para saber que digita en el campo cantidad
  onKey($event) {
    const cap = this.almacen.Capacidad
    const can = this.sal.cantidad
    const cantidadinv = this.inventario.Cantidad;
    const cantidadsuma = cantidadinv + can;
    if (cantidadsuma >= cap) {
      this.showMenssage5();
    }
  }

  //para saber que digita en la cantidad2
  onKey2($event) {
    const cap = this.almacen.Capacidad2
    const cantidadinv = this.inventario.Cantidad2;
    const cantidadsuma = cantidadinv;
    if (cantidadsuma >= cap) {
      this.showMenssage5();
    }
  }
//saber que almacen selecciono y cargar la unidad de medida
onChange($event) {

  for (let al of this.alm) {

    if (this.sal.idAlmacen == al.idAlmacenes) {
      const id = this.sal.idAlmacen;
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
//para saber que inventario selecciono y cargar la unidad 
onChange1($event) {
  console.log(this.sal);

  for (let al of this.inv) {

    if (this.idinv == al.idInventario) {
      console.log("IGUAl", this.idinv);
      this.Service.getinventarioid(this.idinv.toString()).subscribe(res => {
        this.inventario = Object(res);
        console.log(this.inventario);
        if(this.inventario.unidad == "g"){
          //console.log('entro g');
          this.unidadmedida.pop();
          this.unidadmedida.pop();
          this.unidadmedida.push('');
          this.unidadmedida.push('g');
        }else if(this.inventario.unidad  == "ml"){
          this.unidadmedida.pop();
          this.unidadmedida.pop();
          this.unidadmedida.push('');
          this.unidadmedida.push("ml");
        }else if (this.inventario.unidad == "g y ml"){
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

  //verificar que selecciono en la unidad de medida
  habilitado = true;
  onChange3($event) {
    console.log(this.sal.unidad);
    if(this.sal.unidad == "g y ml"){
      console.log("entro");
      this.habilitado = false;
      console.log(this.habilitado);
    }else if (this.sal.unidad == "g") {
      this.habilitado = true;
    }else if (this.sal.unidad == "ml") {
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

}
