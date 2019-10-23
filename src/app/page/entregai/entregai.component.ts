import { Component, OnInit } from '@angular/core';
import { InEntrega } from 'src/app/interfaces/inhabilitarentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregai',
  templateUrl: './entregai.component.html',
  styleUrls: ['./entregai.component.css']
})
export class EntregaiComponent implements OnInit {

  public Inentrega: InEntrega [] = [];

  constructor( private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    inent:InEntrega = {
      idEntrega: 0,
      EstadoEntrega :'',
    };

    

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getentregaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.inent = Object(res);
        }, err => {
          console.log(err);
        }
        );

  }
}

showMenssage(){
  Swal.fire({
    title: 'Inhabilitado!',
    text: 'entrega Inhabilitado',
    type: 'success',
    confirmButtonText: 'Ok'}).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/entrega']);
    
      }
  });
}

showMenssage1(){
  Swal.fire({
    title: 'habilitado!',
    text: 'entrega habilitado',
    type: 'success',
    confirmButtonText: 'Ok'}).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/entrega']);
    
      }
  });
}

EnableDatos(){

  this.Service.putentregaInhabilitar(this.inent.idEntrega, this.inent)
    .subscribe(
      res => {
        console.log(res);

        if(this.inent.EstadoEntrega == "1"){

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
