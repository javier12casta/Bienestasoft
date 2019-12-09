import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { Lprecios } from 'src/app/interfaces/listaprecios';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {

  listamaestro: string[] = ["0", "1"];
  año: string[] = [];
  referencia: TipoBienestarina[] = [];
  cb;
  cb1 ;
  x: Lprecios = {


    Referencia: '',
    Mes: '',
    Ano: 0,
    ValorCop: null,
    Estado: 1,
    Codigo: null,

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
 


  onFilterChange(){
    for (let re of this.referencia) 
    {
      if(re.Codigo == this.x.Codigo){
        this.x.Referencia = re.Referencia
      }
      
    }

  //  console.log(i);
 // }
  } 
  ngOnInit() {

  this.Service.getTipobienestarina().subscribe(res => {
    this.referencia = Object(res);
    console.log(this.referencia);
  }, err =>{
    console.log(err);
  });                      

  }
}
