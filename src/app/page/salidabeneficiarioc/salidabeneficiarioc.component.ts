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

@Component({
  selector: 'app-salidabeneficiarioc',
  templateUrl: './salidabeneficiarioc.component.html',
  styleUrls: ['./salidabeneficiarioc.component.css']
})
export class SalidabeneficiariocComponent implements OnInit {

  salidabeneficiario: Salidabeneficiario[] = [];
 
  public tip: TipoBienestarina[] = [];
  public cen: Centrodistribucion[] = [];
  public alm: Almacen[] = [];
  public ben: Beneficiario[] = [];
  public acu: Acudientes[] = [];
  
  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    sal: Salidabeneficiario = {

      lote  : '',
      fechavencimiento  : 0,
      cantidad  : 0,
      unidad  : '',
      idAcudientes   : 0,
      idBeneficiarios  : 0,
      idCentroDistribucion  : 0,
      idAlmacenes  : 0,
      idTipoBienesterina  : 0,
    
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

  }

  onClickMe(){

    this.Service.postsalidabeneficiario(this.sal).subscribe(res => {
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
      text: 'salida beneficiario Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/salidabeneficiario']);
    
      }
    });
  }



}
