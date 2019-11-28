import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-serviciosymodalidades',
  templateUrl: './serviciosymodalidades.component.html',
  styleUrls: ['./serviciosymodalidades.component.css']
})
export class ServiciosymodalidadesComponent implements OnInit {

  x : MaestroBienestarina = {
    
    EstadoDatoMaestro : 0,
    Modalidad : "",
    Servicio : 0,
    

  };

  constructor(private Service: ServicioService,private router:Router) { }

  ngOnInit() {
  }


  onClickMe() {

 
  this.Service.postMaestrosBienestrina(this.x).subscribe(res => {
    console.log(this.x);
    this.showMenssage();
    },
    err => {
      console.log(err);
    });
   

  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/serviciosymodalidadesv']);
    
      }


    });
  }


}
