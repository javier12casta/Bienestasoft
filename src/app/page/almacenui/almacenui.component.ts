import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/interfaces/almacen';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Uds } from 'src/app/interfaces/uds';

@Component({
  selector: 'app-almacenui',
  templateUrl: './almacenui.component.html',
  styleUrls: ['./almacenui.component.css']
})
export class AlmacenuiComponent implements OnInit {

  
  listamaestro:string[]=["0","1"];
  unidadmedida:string[]=["g","ml", "g y ml"];
  public cen: Centrodistribucion[] = [];
  public cen1: Uds[] = [];
  campo: [];

  x : Almacen = {
    
    NumeroExterno : '',
    Nombre: '',
    Responsable : '',
    Capacidad  : 0,
    Capacidad2  : 0,
    UnidadMedida  : '',
    Estado  : 0,
    idCentroDistribucion : 1,

    
  };

  onClickMe() {
 
    this.Service.postalmacen(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     
     },
     err => {
       console.log(err);
     });
    
   }

   habilitado = true;

   onChange($event) {
    
    if(this.x.UnidadMedida == "g y ml"){
      this.habilitado = false;
   console.log(this.habilitado);
    }else if (this.x.UnidadMedida == "g") {
      this.habilitado = true;
    }else if (this.x.UnidadMedida == "ml") {
      this.habilitado = true;
    }
     
  }

  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {

    this.Service.getcentrodistribucion()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    
  this.Service.getUds()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });


  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Almacen Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/almacenu']);
    
      }
    });

}

}
