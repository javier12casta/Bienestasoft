import { Component, OnInit } from '@angular/core';
import { Inuds } from 'src/app/interfaces/inhabilitaruds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabilitaruds',
  templateUrl: './inhabilitaruds.component.html',
  styleUrls: ['./inhabilitaruds.component.css']
})
export class InhabilitarudsComponent implements OnInit {

  public Inunidad: Inuds [] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }

    inud:Inuds = {
      idUDS: 0,
    Estado: 0,
    };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUdsid(params.id)
        .subscribe(res => {
          console.log(res);
          this.inud = Object(res);
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
          
          this.router.navigate(['/uds']);
      
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
          
          this.router.navigate(['/uds']);
      
        }
    });
  }

  EnableDatos(){

    this.Service.putUdsInhabilitar(this.inud.idUDS, this.inud)
      .subscribe(
        res => {
          console.log(res);
  
          if(this.inud.Estado == 1){
  
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
