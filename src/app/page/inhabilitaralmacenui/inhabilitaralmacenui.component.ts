import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InAlmacen } from '../../interfaces/inhabilitaralmacen';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitaralmacenui',
  templateUrl: './inhabilitaralmacenui.component.html',
  styleUrls: ['./inhabilitaralmacenui.component.css']
})
export class InhabilitaralmacenuiComponent implements OnInit {

  public Inalmac: InAlmacen [] = [];


  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    ina: InAlmacen = {

      idAlmacenes: 1,
      Estado  : 0,
      
   };



  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getalmacenid(params.id)
        .subscribe(res => {
          console.log(res);
          this.ina = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }


  }

  showMenssage(){
    Swal.fire({
      title: 'Inhabilitado',
      text: 'Almacén inhabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitaralmacenu']);
    
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'Almacén habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitaralmacenu']);
    
      }
    });
  }

  EnableDatos(){

    this.Service.putalmacenInhabilitar(this.ina.idAlmacenes, this.ina)
      .subscribe(
        res => {
          console.log(res);

          if(this.ina.Estado == 1){

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
