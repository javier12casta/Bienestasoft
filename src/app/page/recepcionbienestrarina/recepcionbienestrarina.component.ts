import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recepcionbienestrarina',
  templateUrl: './recepcionbienestrarina.component.html',
  styleUrls: ['./recepcionbienestrarina.component.css']
})
export class RecepcionbienestrarinaComponent implements OnInit {

  lista = '';
  public centro: Centrodistribucion[] = [];
  listar:string[]=["Entrada a centro de distribución y carga inventario inicial"];

  constructor( private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }


  ngOnInit() {

    this.Service.getcentrodistribucion()
      .subscribe(res => {
        this.centro = res;
      }, err => {
        console.log(err);
      });
  }

  onClickMe(){

    if(this.lista == 'Entrada a centro de distribución y carga inventario inicial'){


      this.router.navigate(['/recepcionv']);
    
    }

    if(this.lista == ''){
  
      this.showMenssagenull();
        
      }
  
  }

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Seleccione un tipo de movimiento',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }



}
