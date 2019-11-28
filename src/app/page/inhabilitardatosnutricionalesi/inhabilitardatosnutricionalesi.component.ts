import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Invarios } from '../../interfaces/inhabilitardatosvarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhabilitardatosnutricionalesi',
  templateUrl: './inhabilitardatosnutricionalesi.component.html',
  styleUrls: ['./inhabilitardatosnutricionalesi.component.css']
})
export class InhabilitardatosnutricionalesiComponent implements OnInit {

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
      title: 'Inhabilitado',
      text: 'dato maestro Inhabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'habilitado',
      text: 'dato maestro habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
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
