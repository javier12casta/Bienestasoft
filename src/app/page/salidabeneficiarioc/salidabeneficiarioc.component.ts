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
  unidadmedida = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router: Router) { }

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

  idinv = 0;


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
      title: 'Creado!',
      text: 'salida beneficiario Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
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
      text: 'La Cantidad ingresada supera la capacidad',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
  //Para saber que digita en el campo cantidad
  onKey($event) {
    const Cantidadx = this.sal.cantidad;
    const cap = this.almacen.Capacidad;
    const cantidadinv = this.inventario.Cantidad;
    const cantidadsuma = Cantidadx + cantidadinv;
    if (cantidadsuma >= cap) {
      this.showMenssage5();
    }
  }

  //para saber que digita en la cantidad2
  onKey2($event) {
    const Cantidadx = this.sal.Cantidad2;
    const cap2 = this.almacen.Capacidad2;
    const cantidadinv = this.inventario.Cantidad2;
    const cantidadsuma = Cantidadx + cantidadinv;
    if (cantidadsuma >= cap2) {
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
            this.inventario.unidad = "g";
            this.unidadmedida.pop();
            this.unidadmedida.pop();
            this.unidadmedida.push('g');
          } else if (this.inventario.unidad == "ml") {
            this.unidadmedida.pop();
            this.unidadmedida.push("ml");
          } else if (this.inventario.unidad == "g y ml") {
            this.unidadmedida.pop();
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


}
