import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { TipoBienestarina } from '../../interfaces/tipobienestarina';

@Component({
  selector: 'app-modificareferenciabm',
  templateUrl: './modificareferenciabm.component.html',
  styleUrls: ['./modificareferenciabm.component.css']
})
export class ModificareferenciabmComponent implements OnInit {

  public tipobienestarina: TipoBienestarina[] = [];

  constructor( private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    bine: TipoBienestarina = {

      idTipoBienesterina : 1,
      Codigo : 0,
      Estado : '',
      Referencia : '',
      UnidadPrincipal : '',
      Cantidad : 0,
      UnidadSecundaria: '',
  
  
      };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getTipobienestarinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.bine = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

   updateDatos() {
    this.Service.putTipobienestarina(this.bine.idTipoBienesterina, this.bine)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }


}
