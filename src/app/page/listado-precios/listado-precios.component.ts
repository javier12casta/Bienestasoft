import { Component, OnInit } from '@angular/core';
import { Lprecios } from 'src/app/interfaces/listaprecios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {

  listamaestro: string[] = ["0", "1"];
  cb;
  cb1 ;
  x: Lprecios = {


    Referencia: '',
    Mes: '',
    Ano: 0,
    ValorCop: 0,
    Estado: 0,
    Codigo: 0,

  };

  
  
  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Dato maestro modificadp',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarlistac']);
        window.location.reload()
      }
    });
  }  

 
  f = new Date();
  fecha =  this.f.getFullYear();
 
  

 


  onClickMe() {

    this.Service.postListaprecios(this.x).subscribe(res => {
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

}
