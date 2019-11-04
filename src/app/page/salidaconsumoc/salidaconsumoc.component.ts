import { Component, OnInit } from '@angular/core';
import { Salidaconsumo} from 'src/app/interfaces/salidaconsumo';
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
  selector: 'app-salidaconsumoc',
  templateUrl: './salidaconsumoc.component.html',
  styleUrls: ['./salidaconsumoc.component.css']
})
export class SalidaconsumocComponent implements OnInit {

  salidacentro: Salidaconsumo[] = [];
 
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }


    sal: Salidaconsumo = {

      lote  : '',
      fechavencimiento  : 0,
      cantidad  : 0,
      unidad  : '',
      fecharegistro  : 0,
      idTipoBienesterina  : 0,
      idCentroDistribucion  : 0,
      idAlmacenes  : 0,
     
    
    };

  ngOnInit() {
  }

}
