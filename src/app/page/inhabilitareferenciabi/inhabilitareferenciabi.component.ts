import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InTipoBienestarina } from '../../interfaces/inhabilitartipobienestarina';



@Component({
  selector: 'app-inhabilitareferenciabi',
  templateUrl: './inhabilitareferenciabi.component.html',
  styleUrls: ['./inhabilitareferenciabi.component.css']
})
export class InhabilitareferenciabiComponent implements OnInit {

  public tipob: InTipoBienestarina[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    tip: InTipoBienestarina = {

      idTipoBienesterina:0,
      Estado : '',
      
   };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getTipobienestarinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.tip = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }


  }

  EnableDatos(){

    this.Service.putTipobienestarinaInhabilitar(this.tip.idTipoBienesterina, this.tip)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }


}
