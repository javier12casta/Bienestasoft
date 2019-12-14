import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';

@Component({
  selector: 'app-datosvariospi',
  templateUrl: './datosvariospi.component.html',
  styleUrls: ['./datosvariospi.component.css']
})
export class DatosvariospiComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadm:string[]=["g","personas"];
  public cen1: Puntoentrega[] = [];
  
  x : Datosvarios = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 0,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',
    idPuntoEntrega : 0,

  };

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/datosvariosp']);
    
      }
    });
  }

  onClickMe() {
    
    this.Service.postdatosvarios(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     },
     err => {
       console.log(err);
     });
    
   }

  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {


    this.Service.getPunto()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  }


}
