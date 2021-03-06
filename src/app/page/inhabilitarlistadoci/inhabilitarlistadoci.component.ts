import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InListadocursos } from '../../interfaces/inhabilitarlistadocursos';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inhabilitarlistadoci',
  templateUrl: './inhabilitarlistadoci.component.html',
  styleUrls: ['./inhabilitarlistadoci.component.css']
})
export class InhabilitarlistadociComponent implements OnInit {
  public listadoc: InListadocursos[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

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
      title: 'Deshabilitado',
      text: 'Dato Maestro deshabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarelistadoc']);
        window.location.reload();
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'Dato Maestro habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarelistadoc']);
        window.location.reload();
      }
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
