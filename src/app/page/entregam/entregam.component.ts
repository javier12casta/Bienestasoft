import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Entrega } from 'src/app/interfaces/entrega';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregam',
  templateUrl: './entregam.component.html',
  styleUrls: ['./entregam.component.css']
})
export class EntregamComponent implements OnInit {
  public entr: Entrega[] = [];
  listamaestro:string[]=["0","1"];
  
  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    entrea: Entrega = {
    idEntrega: 1,
    CantidadEntregada : '',
    FechaEntrega : 0,
    EstadoEntrega : '',
    
    };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getentregaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.entrea = Object(res);
        }, err => {
          console.log(err);
        }
        );


  }
}

updateDatos() {
  this.Service.putentrega(this.entrea.idEntrega, this.entrea)
    .subscribe(
      res => {
        console.log(res);
        this.showMenssage();
      }, err => {
        this.showMenssage2();
        console.log(err);
      }
    );
}
 //mensajes de creacion
 showMenssage(){
  Swal.fire({
    title: 'Modificado!',
    text: 'Entrega Modificada',
    type: 'success',
    confirmButtonText: 'Entendido'
  }).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/entrega']);
  
		}
  });
}
//Mensaje de error

showMenssage2(){
Swal.fire({
  title: 'Error!',
  text: 'Error al modificar la entrega',
  type: 'error',
  confirmButtonText: 'Entendido'
});
}



}
