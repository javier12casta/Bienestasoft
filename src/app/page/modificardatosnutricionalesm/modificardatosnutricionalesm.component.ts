import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Datosvarios } from '../../interfaces/datosvarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificardatosnutricionalesm',
  templateUrl: './modificardatosnutricionalesm.component.html',
  styleUrls: ['./modificardatosnutricionalesm.component.css']
})
export class ModificardatosnutricionalesmComponent implements OnInit {

  public datosvarios: Datosvarios[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    
    dvarios: Datosvarios = {

      idDatosVarios : 1,
      CodigoInterno : 0,
      EstadoDatoMaestro : 0,
      DescripcionDelRegistro : '',
      Valor : 0,
      UnidadDeMedida : '',   
  
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
  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Dato Maestro Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificardatosnutricionales']);

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
