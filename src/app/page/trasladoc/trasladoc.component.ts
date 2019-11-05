import { Component, OnInit } from '@angular/core';
import { Translado } from 'src/app/interfaces/traslado';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  }
  onClickMe(){

    
    this.Service.postraslados(this.sal).subscribe(res => {
      console.log(this.sal);
      this.showMenssage();
      
      },
      err => {
        console.log(err);
      });
      
     
     

  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'traslado Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/traslado']);
    
      }
    });
  }


}
