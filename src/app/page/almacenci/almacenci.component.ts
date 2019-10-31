import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/interfaces/almacen';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-almacenci',
  templateUrl: './almacenci.component.html',
  styleUrls: ['./almacenci.component.css']
})
export class AlmacenciComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadmedida:string[]=["g","ml"];
  public cen: Centrodistribucion[] = [];

  x : Almacen = {
    
   
    NumeroExterno : '',
    NombreCentroDistribucion: '',
    Responsable : '',
    Capacidad  : 0,
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


  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {

    this.Service.getcentrodistribucion()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });


  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Almacen Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/almacenc']);
    
      }
    });

}

}
