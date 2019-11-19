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

@Component({
  selector: 'app-recepcionbienestarinavi',
  templateUrl: './recepcionbienestarinavi.component.html',
  styleUrls: ['./recepcionbienestarinavi.component.css']
})
export class RecepcionbienestarinaviComponent implements OnInit {

  public alm: Almacen[] = [];
  public cen: Centrodistribucion[] = [];
  public tip: TipoBienestarina[] = [];
  public inv: Inventario[] = [];
  public ac: Acta[] = [];

  constructor(private Service: ServicioService, private router:Router) { }

  x : Recepcion = {
    
    lote : '',
    FechaVencimiento : 0,
    Cantidad  : 0,
    UnidadPrincipal: '',
    FechaRecepcion  : 0,
    idTipoBienesterina : 0,
    idAlmacenes : 0,
    idCentroDistribucion : 0,
    idInventario : 0,
  };

  y: Acta = {  

    numero : 0,
    idBienestarina : 6,
  };
  

  ngOnInit() {

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

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Recepcion Creada',
      type: 'success',
	  confirmButtonText: 'Ok'
	}).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/recepcionv']);
  
		}
  
    });
  }

  showMenssage3(){
	Swal.fire({
	  title: 'Error!',
	  text: 'campos erroneos o vacios',
	  type: 'error',
	  confirmButtonText: 'Entendido'
	});
  }
  
  showMenssage4(){
    Swal.fire({
      title: 'Advertencia',
      text: 'esta seguro de registrar los datos',
      type: 'warning',
      confirmButtonText: 'Entendido'
      }).then((result) => {
      if (result.value) {
        
        this.onClickMe();
    
      }
    
      
     });
    }
}
