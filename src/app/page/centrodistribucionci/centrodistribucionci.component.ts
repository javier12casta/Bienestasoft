import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centrodistribucionci',
  templateUrl: './centrodistribucionci.component.html',
  styleUrls: ['./centrodistribucionci.component.css']


})
export class CentrodistribucionciComponent implements OnInit {

  listamaestro:string[]=["0","1"];

  x : Centrodistribucion = {
    
    NumeroExterno:'',
    Nombre : '',
    Responsable : '' ,
    Direccion : '',
    Barrio : '',
    Telefono : 0,
    Estado : 0,

  };

  onClickMe() {
 
    this.Service.postcentrodistribucion(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     
     },
     err => {
       console.log(err);
     });
    
   }

  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {

   
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Centro Distribucion Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/centrodistribucionc']);
    
      }
    });

}
}