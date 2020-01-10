import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Innumerocupos } from '../../interfaces/inhabilitarnumerocupos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inhabilitarnivelnumerocuposci',
  templateUrl: './inhabilitarnivelnumerocuposci.component.html',
  styleUrls: ['./inhabilitarnivelnumerocuposci.component.css']
})
export class InhabilitarnivelnumerocuposciComponent implements OnInit {

  public dvarios: Innumerocupos[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    inc: Innumerocupos = {

      idnumerocupos: 1,
    EstadoDatoMaestro : 0,
        
     };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getnumerocuposid(params.id)
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
      text: 'dato maestro Deshabilitado',
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
      title: 'habilitado',
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

    this.Service.putnumerocupoInhabilitar(this.inc.idnumerocupos, this.inc)
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
