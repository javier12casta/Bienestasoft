import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InTipoBienestarina } from '../../interfaces/inhabilitartipobienestarina';
import { InMaestroBienestarina } from '../../interfaces/inhabilitarmaestrosBienestarina';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitareferenciabi',
  templateUrl: './inhabilitareferenciabi.component.html',
  styleUrls: ['./inhabilitareferenciabi.component.css']
})
export class InhabilitareferenciabiComponent implements OnInit {

  public tipob: InTipoBienestarina[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

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

  showMenssage(){
    Swal.fire({
      title: 'Deshabilitado',
      text: 'Dato maestro Deshabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitareferenciab']);
      }
    });
  }
  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'Dato maestro habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitareferenciab']);
      }
    });
  }


  EnableDatos(){

    this.Service.putTipobienestarinaInhabilitar(this.tip.idTipoBienesterina, this.tip)
      .subscribe(
        res => {
          console.log(res);

          if(this.tip.Estado == "1"){

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
