import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InCentrodistribucion } from '../../interfaces/inhabilitarcentrodistribucion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhabilitarcentrodm',
  templateUrl: './inhabilitarcentrodm.component.html',
  styleUrls: ['./inhabilitarcentrodm.component.css']
})
export class InhabilitarcentrodmComponent implements OnInit {

  public centrod: InCentrodistribucion[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    inc: InCentrodistribucion = {

    idCentroDistribucion: 1,
    Estado : 0,
      
   };



  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getcentrodistribucionid(params.id)
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
      title: 'Inhabilitado!',
      text: 'Beneficiario Inhabilitado',
      type: 'success',
      confirmButtonText: 'Ok'
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'habilitado!',
      text: 'Beneficiario habilitado',
      type: 'success',
      confirmButtonText: 'Ok'
    });
  }

  EnableDatos(){

    this.Service.putcentrodistribucionInhabilitar(this.inc.idCentroDistribucion, this.inc)
      .subscribe(
        res => {
          console.log(res);

          if(this.inc.Estado == 1){

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
