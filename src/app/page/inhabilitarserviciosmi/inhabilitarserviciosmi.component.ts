import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InMaestroBienestarina } from '../../interfaces/inhabilitarmaestrosBienestarina';



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

  EnableDatos(){

    this.Service.putMaestrosBienestrinaInhabilitar(this.serv.idListasMaestro, this.serv)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }

}
