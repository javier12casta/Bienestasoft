import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InUsuarios } from '../../interfaces/inhabilitarusuarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitarusuariosp',
  templateUrl: './inhabilitarusuariosp.component.html',
  styleUrls: ['./inhabilitarusuariosp.component.css']
})
export class InhabilitarusuariospComponent implements OnInit {
  public usuarios: InUsuarios[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    usu: InUsuarios = {

      idUsuarios: 1,
      Estado: 0,
      
   };


  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUsuariosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.usu = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }
  }

  showMenssage(){
    Swal.fire({
      title: 'Deshabilitado',
      text: 'Usuario deshabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarusuarios2']);
    
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'Usuario habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarusuarios2']);
    
      }
    });
  }


  EnableDatos(){

    this.Service.putUsuariosInhabilitar(this.usu.idUsuarios, this.usu)
      .subscribe(
        res => {
          console.log(res);

          if(this.usu.Estado == 1){

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
