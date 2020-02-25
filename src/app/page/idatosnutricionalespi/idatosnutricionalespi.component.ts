import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Invarios } from '../../interfaces/inhabilitardatosvarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idatosnutricionalespi',
  templateUrl: './idatosnutricionalespi.component.html',
  styleUrls: ['./idatosnutricionalespi.component.css']
})
export class IdatosnutricionalespiComponent implements OnInit {

  public dvarios: Invarios[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    inc: Invarios = {

      idDatosVarios: 1,
    EstadoDatoMaestro : 0,
        
     };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getdatosvariosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.inc = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  showMenssage(){
    Swal.fire({
      title: 'Deshabilitado',
      text: 'dato maestro deshabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        

        window.location.reload();
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'dato maestro habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        
        window.location.reload();
      }
    });
  }

  EnableDatos(){

    this.Service.putdatosvariosInhabilitar(this.inc.idDatosVarios, this.inc)
      .subscribe(
        res => {
          console.log(res);

          if(this.inc.EstadoDatoMaestro == 1){

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
