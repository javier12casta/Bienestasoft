import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Uds } from 'src/app/interfaces/uds';

@Component({
  selector: 'app-datosvariosui',
  templateUrl: './datosvariosui.component.html',
  styleUrls: ['./datosvariosui.component.css']
})
export class DatosvariosuiComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadm:string[]=["g","personas"];
  public cen1: Uds[] = [];
  
  x : Datosvarios = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 0,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',
    idUDS : 0,

  };

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/datosvariosu']);
    
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


    this.Service.getUds()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  }


}
