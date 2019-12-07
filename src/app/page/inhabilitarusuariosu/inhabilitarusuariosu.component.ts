import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InUsuarios } from '../../interfaces/inhabilitarusuarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitarusuariosu',
  templateUrl: './inhabilitarusuariosu.component.html',
  styleUrls: ['./inhabilitarusuariosu.component.css']
})
export class InhabilitarusuariosuComponent implements OnInit {

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
      title: 'Inhabilitado',
      text: 'Usuario inhabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarusuarios3']);
    
      }
    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'habilitado',
      text: 'Usuario habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarusuarios3']);
    
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
