import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepcionbienestrarina',
  templateUrl: './recepcionbienestrarina.component.html',
  styleUrls: ['./recepcionbienestrarina.component.css']
})
export class RecepcionbienestrarinaComponent implements OnInit {

  lista = '';
  public centro: Centrodistribucion[] = [];
  listar:string[]=["centro distribucion","Inventario"];

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

    if(this.lista == 'centro distribucion'){


      this.router.navigate(['/recepcionv']);
    
    }
  
    if(this.lista == 'Inventario'){

      this.router.navigate(['recepcioninv']);
    
    }

  }



}
