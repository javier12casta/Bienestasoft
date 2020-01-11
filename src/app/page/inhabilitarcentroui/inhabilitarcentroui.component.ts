import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InCentrodistribucion } from '../../interfaces/inhabilitarcentrodistribucion';
import Swal from 'sweetalert2';
import { Almacen } from 'src/app/interfaces/almacen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitarcentroui',
  templateUrl: './inhabilitarcentroui.component.html',
  styleUrls: ['./inhabilitarcentroui.component.css']
})
export class InhabilitarcentrouiComponent implements OnInit {

  public centrod: InCentrodistribucion[] = [];
  almacen: Almacen [] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

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

        this.Service.getalmacen().subscribe( res => {
          this.almacen = Object(res);
        });
    }
  }

  updateDatos() {
    const params = this.activeRoute.snapshot.params;
    var numero = params.id;
    var cont2: number = 0;
    var cont3: number = 0;
    console.log('Almacenes', this.almacen);
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
    if (cont2 == 0 && cont3 >= 0){
      //console.log('funciona');
      this.updateDatos2();
    }else{
      //mensaje de no se puede inhabilitar
      this.showMenssage4();
    } 
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error',
      text: 'No es posible deshabilitar el centro de distribucion',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitaru']);
    
      }
    });
  }

  showMenssage(){
    Swal.fire({
      title: 'Deshabilitado',
      text: 'Centro de distribución deshabilitado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitaru']);
    
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'Centro de distribución habilitado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitaru']);
    
      }
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
