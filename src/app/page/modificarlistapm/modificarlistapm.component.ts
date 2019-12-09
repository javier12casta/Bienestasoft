import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Lprecios } from '../../interfaces/listaprecios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarlistapm',
  templateUrl: './modificarlistapm.component.html',
  styleUrls: ['./modificarlistapm.component.css']
})
export class ModificarlistapmComponent implements OnInit {

  public precio: Lprecios[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    pre: Lprecios = {

    idListaPrecios : 1,
    Referencia : '',
    Mes : '',
    Ano : 0,
    ValorCop :0,
    Estado : 0,
    Codigo : 0,
  
      };

      
  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getListapreciosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.pre = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Dato Maestro Modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarlistac']);
        window.location.reload();
      }
    });
  }


  updateDatos() {
    this.Service.putListaprecios(this.pre.idListaPrecios, this.pre)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }
}