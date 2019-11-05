import { Component, OnInit } from '@angular/core';
import { Salidacentro } from 'src/app/interfaces/salidacentro';
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
  selector: 'app-salidacentroc',
  templateUrl: './salidacentroc.component.html',
  styleUrls: ['./salidacentroc.component.css']
})
export class SalidacentrocComponent implements OnInit {

  salidacentro: Salidacentro[] = [];
 
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];


  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    sal: Salidacentro = {

      identregacentrodistribucion: 0,
      lote  : '',
      fechavencimiento  : 0,
      cantidad  : 0,
      unidad  : '',
      fecharegistro  : 0,
      idCentroDistribucionOrigen  : 0,
      idCentroDistribucionDestino  : 0,
      idAlmacen  : 0,
      idTipoBienesterina  : 0,
    
    };



  ngOnInit() {
  }

}
