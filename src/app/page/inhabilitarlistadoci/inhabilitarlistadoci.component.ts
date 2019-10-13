import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InListadocursos } from '../../interfaces/inhabilitarlistadocursos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inhabilitarlistadoci',
  templateUrl: './inhabilitarlistadoci.component.html',
  styleUrls: ['./inhabilitarlistadoci.component.css']
})
export class InhabilitarlistadociComponent implements OnInit {
  public listadoc: InListadocursos[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    lisc:InListadocursos = {

      idListadoCursos : 1,
    Estado : 0,
      
   };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getlistadocursossid(params.id)
        .subscribe(res => {
          console.log(res);
          this.lisc = Object(res);
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

    this.Service.putlistadocursosInhabilitar(this.lisc.idListadoCursos, this.lisc)
      .subscribe(
        res => {
          console.log(res);
          if(this.lisc.Estado == 1){

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
