import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InCentrodistribucion } from '../../interfaces/inhabilitarcentrodistribucion';
import Swal from 'sweetalert2';
import { Almacen } from 'src/app/interfaces/almacen';

@Component({
  selector: 'app-inhabilitarcentrodm',
  templateUrl: './inhabilitarcentrodm.component.html',
  styleUrls: ['./inhabilitarcentrodm.component.css']
})
export class InhabilitarcentrodmComponent implements OnInit {

  public centrod: InCentrodistribucion[] = [];
  almacen: Almacen [] = [];

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

  updateDatos() {
    const params = this.activeRoute.snapshot.params;
    var numero = params.id;
    var cont2: number = 0;
    var cont3: number = 0;

    for (let numeros of this.almacen) {
      if (numero == numeros.idCentroDistribucion && numeros.Estado == 1) {
        var cont: number = 0;
        var cont2 = cont + 1;
        //this.showMenssage3();
      } else if(numero == numeros.idCentroDistribucion && numeros.Estado == 0) {
        var cont: number = 0;
        cont3 = cont + 1;
      }
    }
    if (cont2 == 0 && cont3 >0){
      //console.log('funciona');
      this.updateDatos2();
    }else{
      //mensaje de no se puede inhabilitar
      this.showMenssage4();
    } 
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error!',
      text: 'No es posible inhabilitar la UDS',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
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

  updateDatos2(){

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
