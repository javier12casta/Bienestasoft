import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InLprecios } from '../../interfaces/inhabilitarlistaprecio';
import Swal from 'sweetalert2';


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

  showMenssage(){
    Swal.fire({
      title: 'Inhabilitado!',
      text: 'Dato Maestro Inhabilitado',
      type: 'success',
      confirmButtonText: 'Ok'
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'habilitado!',
      text: 'Dato Maestro habilitado',
      type: 'success',
      confirmButtonText: 'Ok'
    });
  }



    EnableDatos(){

      this.Service.putListapreciosInhabilitar(this.pre.idListaPrecios, this.pre)
        .subscribe(
          res => {
            console.log(res);

            if(this.pre.Estado == 1){

              this.showMenssage1();
  
            }else{
  
              this.showMenssage();
            }


          }, err => {
            console.log(err);
          }
        );
    }

  }


