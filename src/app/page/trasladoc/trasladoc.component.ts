import { Component, OnInit } from '@angular/core';
import { Translado } from 'src/app/interfaces/traslado';
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
  selector: 'app-trasladoc',
  templateUrl: './trasladoc.component.html',
  styleUrls: ['./trasladoc.component.css']
})
export class TrasladocComponent implements OnInit {

  translado: Translado[] = [];
 
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }


    sal: Translado = {

   
      lote  : '',
      fechavencimiento  : 0,
      unidad  : '',
      fecharegistro  : 0,
      idTipoBienesterina  : 0,
      idCentroDistribucion  : 0,
      idAlmacenesOrigen  : 0,
      idAlmacenesDestino  : 0,
      
    
    };

  ngOnInit() {
  }

}
