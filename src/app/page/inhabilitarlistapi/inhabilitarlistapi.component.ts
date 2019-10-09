import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InLprecios } from '../../interfaces/inhabilitarlistaprecio';

@Component({
  selector: 'app-inhabilitarlistapi',
  templateUrl: './inhabilitarlistapi.component.html',
  styleUrls: ['./inhabilitarlistapi.component.css']
})
export class InhabilitarlistapiComponent implements OnInit {

  public precio: InLprecios[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    pre: InLprecios = {

      idListaPrecios : 1,
      Estado :0 ,
      
   };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getListapreciosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.pre = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }
  }

    EnableDatos(){

      this.Service.putListapreciosInhabilitar(this.pre.idListaPrecios, this.pre)
        .subscribe(
          res => {
            console.log(res);
          }, err => {
            console.log(err);
          }
        );
    }

  }


