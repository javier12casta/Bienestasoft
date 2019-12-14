import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';

@Component({
  selector: 'app-datosvarios',
  templateUrl: './datosvarios.component.html',
  styleUrls: ['./datosvarios.component.css']


})
export class DatosvariosComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadm:string[]=["g","personas"];
  public cen1: Centrozonal[] = [];
  
  x : Datosvarios = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 0,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',
    idCentrosZonales : 0,

  };

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/datosvariosv']);
    
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


    this.Service.getCentro()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  }

}
