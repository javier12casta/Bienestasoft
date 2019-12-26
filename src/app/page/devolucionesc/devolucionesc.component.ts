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
    };

      //----Validaciones de campos
  dev: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dev.valid) {
        this.onClickMe();
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
        idCentroDistribucionOrigen: ['', Validators.required],
        idCentroDistribucionDestino: ['', Validators.required],
        idAlmacenes: ['', Validators.required],
        idAlmacenes2: ['', Validators.required],
        lote: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z]*$')]],
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
      this.showMenssage();
      },
      err => {
        console.log(err);
      });
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

  Referencia(){
    this.Service.getTipobienestarinaid(this.sal.idTipoBienesterina.toString()).subscribe(res => {
      this.tiporef = Object(res);
      console.log('Tipo de referencia',res);
      this.sal.unidad = this.tiporef.UnidadPrincipal;
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

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }


}
