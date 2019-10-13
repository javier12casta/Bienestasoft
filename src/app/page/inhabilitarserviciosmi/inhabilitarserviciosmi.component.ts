import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InMaestroBienestarina } from '../../interfaces/inhabilitarmaestrosBienestarina';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inhabilitarserviciosmi',
  templateUrl: './inhabilitarserviciosmi.component.html',
  styleUrls: ['./inhabilitarserviciosmi.component.css']
})
export class InhabilitarserviciosmiComponent implements OnInit {
  public ser: InMaestroBienestarina[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    serv: InMaestroBienestarina = {

      idListasMaestro: 1,
      EstadoDatoMaestro : 0,
      
   };

   



  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getMaestrosBienestrinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.serv = Object(res);
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

    this.Service.putMaestrosBienestrinaInhabilitar(this.serv.idListasMaestro, this.serv)
      .subscribe(
        res => {
          console.log(res);
          
          if(this.serv.EstadoDatoMaestro == 1){

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
