import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Datosvarios } from '../../interfaces/datosvarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Uds } from 'src/app/interfaces/uds';

@Component({
  selector: 'app-modificardatosnutricionalesui',
  templateUrl: './modificardatosnutricionalesui.component.html',
  styleUrls: ['./modificardatosnutricionalesui.component.css']
})
export class ModificardatosnutricionalesuiComponent implements OnInit {

  
  public datosvarios: Datosvarios[] = [];
  public cen1: Uds[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    
    dvarios: Datosvarios = {

      idDatosVarios : 1,
      CodigoInterno : 0,
      EstadoDatoMaestro : 0,
      DescripcionDelRegistro : '',
      Valor : 0,
      UnidadDeMedida : '',   
      idUDS : 0,

      };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getdatosvariosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.dvarios = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getUds()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Dato Maestro Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        window.location.reload();

      }
    });
  }

  updateDatos() {
    this.Service.putdatosvarioss(this.dvarios.idDatosVarios, this.dvarios)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }
}
