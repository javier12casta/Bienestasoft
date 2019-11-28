import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Listadocursos } from 'src/app/interfaces/listadocursos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listadocursosv',
  templateUrl: './listadocursosv.component.html',
  styleUrls: ['./listadocursosv.component.css']
})
export class ListadocursosvComponent implements OnInit {

  servic: Listadocursos[] = [];
  listad;

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getlistadocursos()
    .subscribe(async (data) => {
      this.servic = data; 
      console.log(data);
      console.log('funciona');
    }
    );
   this.VerificarDocumento();
  }

  VerificarDocumento(){

  for(let er of this.servic){

    if(er.idTipoDocumento == 2){

      Swal.fire({
        title: 'Creado',
        text: 'Dato Maestro Creado',
        type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
    
      
      }
      });

    }
  

  }   

  }
}
