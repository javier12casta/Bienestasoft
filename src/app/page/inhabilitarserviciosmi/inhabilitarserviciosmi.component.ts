import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InMaestroBienestarina } from '../../interfaces/inhabilitarmaestrosBienestarina';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitarserviciosmi',
  templateUrl: './inhabilitarserviciosmi.component.html',
  styleUrls: ['./inhabilitarserviciosmi.component.css']
})
export class InhabilitarserviciosmiComponent implements OnInit {
  public ser: InMaestroBienestarina[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    serv: InMaestroBienestarina = {

      idListasMaestro: 1,
      EstadoDatoMaestro : 0,
      
   };

   



  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getMaestrosBienestrinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.serv = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  showMenssage(){
    Swal.fire({
      title: 'Inhabilitado',
      text: 'Dato maestro inhabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarserviciom']);
        window.location.reload();
    
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'habilitado',
      text: 'Dato maestro habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarserviciom']);
        window.location.reload();
    
      }
    });
  }



  EnableDatos(){

    this.Service.putMaestrosBienestrinaInhabilitar(this.serv.idListasMaestro, this.serv)
      .subscribe(
        res => {
          console.log(res);
          
          if(this.serv.EstadoDatoMaestro == 1){

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
