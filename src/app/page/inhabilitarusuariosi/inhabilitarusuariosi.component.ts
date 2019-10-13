import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InUsuarios } from '../../interfaces/inhabilitarusuarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhabilitarusuariosi',
  templateUrl: './inhabilitarusuariosi.component.html',
  styleUrls: ['./inhabilitarusuariosi.component.css']
})
export class InhabilitarusuariosiComponent implements OnInit {
  public usuarios: InUsuarios[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

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
