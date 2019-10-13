import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { MaestroBienestarina } from '../../interfaces/maestrosBienestarina';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarserviciomm',
  templateUrl: './modificarserviciomm.component.html',
  styleUrls: ['./modificarserviciomm.component.css']
})
export class ModificarserviciommComponent implements OnInit {

  public maestrosm: MaestroBienestarina[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    maes: MaestroBienestarina = {

      idListasMaestro: 1,
      EstadoDatoMaestro : 0,
      Modalidad : '',
      Servicio : 0,
      idConsecutivosMaestro : 0,
  
      };
  



  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getMaestrosBienestrinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.maes = Object(res);
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
    });
  }


  updateDatos() {
    this.Service.putMaestrosBienestrina(this.maes.idListasMaestro, this.maes)
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
