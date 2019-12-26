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


  public cen: Centrodistribucion[] = [];
  public tip: TipoBienestarina[] = [];
  public inv: Inventario[] = [];
  //para las operaciones
  public inventario: Inventario = {
    idInventario: 0,
    Nombre: '',
    Cantidad: 0,
    Cantidad2: 0,
    unidad: '',
  };
  unidadmedida = ["bolsa","caja"];
  public ac: Acta[] = [];
  cantidadrecp: number;
  id1 = 0;
 

  constructor(
    private Service: ServicioService,
     private router:Router,
     private fb: FormBuilder) { }

  x : Recepcion = {
    
    lote : '',
    FechaVencimiento : 0,
    Cantidad  : 0,
    UnidadPrincipal: '',
    FechaRecepcion: 0,
    idTipoBienesterina: 0,
    idAlmacenes: 0,
    idCentroDistribucion: 0,
    idInventario: 0,
  };

  y: Acta = {
    numero: 0,
    idBienestarina: 6,
  };

  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.RefForm.valid) {
    
      this.onClickMe();
        
  } else if (this.RefForm.invalid) {
    this.showMenssagenull();
  }
}

  ngOnInit() {

    //Validador--------------------
    this.RefForm = this.fb.group({
      alma: ['', Validators.required],
      fecha: ['', Validators.required],
      Cd: ['', Validators.required],
      Tipob: ['', Validators.required],
      inventa: ['', Validators.required],
      Lote: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.)]*$')]],
      fechav: ['', Validators.required],
      unidad: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Cantidadl: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Numero: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

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
  }


  onClickMe() {



    const cantidad = this.x.Cantidad;
    const cantidad2 = this.x.Cantidad2;
    this.inventario.Cantidad = this.inventario.Cantidad + cantidad;
    this.inventario.Cantidad2 = this.inventario.Cantidad2 + cantidad2;
    console.log('Cantidad inventario', this.inventario.Cantidad);

    this.Service.putinventario(this.id1, this.inventario).subscribe(res => {

    }, err => {
      console.log(err);
    });

    this.Service.postrecepcion(this.x).subscribe(res => {
      console.log(this.x);
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

  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Recepción creada',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/recepcionv']);
        window.location.reload();

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


  onChange($event) {

    for (let al of this.alm) {

      if (this.x.idAlmacenes == al.idAlmacenes) {
        const id = al.idAlmacenes;
        console.log("IGUAl", id);
        this.Service.getalmacenid(id.toString()).subscribe(res => {
          this.almacen = Object(res);
          console.log(this.almacen);
          if(this.almacen.UnidadMedida == "g"){
            console.log('entro g');
            this.unidadmedida.pop();
            this.unidadmedida.pop();
            this.unidadmedida.push('');
            this.unidadmedida.push('g');
          }else if(this.almacen.UnidadMedida == "ml"){
            this.unidadmedida.pop();
            this.unidadmedida.pop();
            this.unidadmedida.push('');
            this.unidadmedida.push("ml");
          }else if (this.almacen.UnidadMedida == "g y ml"){
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

  Referencia  (){
    this.Service.getTipobienestarinaid(this.x.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia',res);
      this.x.UnidadPrincipal = this.tiporef.UnidadPrincipal;
    });
  }


  onChange1($event) {

    for (let inve of this.inv) {

      if (this.x.idInventario == inve.idInventario) {
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

  onKey($event) {
    const Cantidadx = this.x.Cantidad;
    const cap = this.almacen.Capacidad;
    const cap2 = this.almacen.Capacidad2;
    const cantidadinv = this.inventario.Cantidad;
    const cantidadsuma = Cantidadx + cantidadinv;
    if (cantidadsuma >= cap) {
      this.showMenssage5();
    }
  }
  onKey2($event) {
    const Cantidadx = this.x.Cantidad2;
    const cap2 = this.almacen.Capacidad2;
    const cantidadinv = this.inventario.Cantidad2;
    const cantidadsuma = Cantidadx + cantidadinv;
    if (cantidadsuma >= cap2) {
      this.showMenssage5();
    }
  }

  habilitado = true;
  onChange3($event) {
    
    console.log(this.x.UnidadPrincipal);
    console.log("entro");
    if(this.x.UnidadPrincipal == "g y ml"){
      
      this.habilitado = false;
      console.log(this.habilitado);
    }else if (this.x.UnidadPrincipal == "g") {
      this.habilitado = true;
    }else if (this.x.UnidadPrincipal == "ml") {
      this.habilitado = true;
    }
  }


}
