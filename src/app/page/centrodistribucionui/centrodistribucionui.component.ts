import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { Uds } from 'src/app/interfaces/uds';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentregat } from 'src/app/interfaces/puntoentregat';

@Component({
  selector: 'app-centrodistribucionui',
  templateUrl: './centrodistribucionui.component.html',
  styleUrls: ['./centrodistribucionui.component.css']
})
export class CentrodistribucionuiComponent implements OnInit {

   
  listamaestro:string[]=["0","1"];
  public cen: Uds[] = [];

  x : Centrodistribucion = {
    
    NumeroExterno:'',
    Nombre : '',
    Responsable : '' ,
    Direccion : '',
    Barrio : '',
    Telefono : 0,
    Estado : 0,
    idUDS : null,
    idCentrosZonales : null,
    idPuntoEntrega : null,

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
    
    this.Service.getUds()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });
   
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Centro Distribución Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/centrodistribucionu']);
    
      }
    });

}

}
