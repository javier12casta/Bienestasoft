import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-referenciasbienestarina',
  templateUrl: './referenciasbienestarina.component.html',
  styleUrls: ['./referenciasbienestarina.component.css']



})
export class ReferenciasbienestarinaComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadmedidad:string[]=["bolsa","caja","otra presentacion"];
  unidadsecundario:string[]=["g","ml"];

  x : TipoBienestarina  = {
    
    TipoBienesterina : '',
    Codigo  : 0,
    Estado : '',
    Referencia : '',
    UnidadPrincipal : '',
    Cantidad : 0,
    UnidadSecundaria:  '',

  };


  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/referenciabienestarinav']);
    
      }
    });
  }




  onClickMe() {

    
    this.Service.postTipobienestarina(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

  }

}
