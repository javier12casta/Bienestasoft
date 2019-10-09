import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InUsuarios } from '../../interfaces/inhabilitarusuarios';

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

  EnableDatos(){

    this.Service.putUsuariosInhabilitar(this.usu.idUsuarios, this.usu)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }

}
