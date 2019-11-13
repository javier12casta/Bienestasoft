import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/interfaces/inventario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-inventarioc',
  templateUrl: './inventarioc.component.html',
  styleUrls: ['./inventarioc.component.css']
})
export class InventariocComponent implements OnInit {

  public inv: Inventario[] = [];

  constructor(private Service: ServicioService, private router:Router) { }

  x : Inventario = {
    
    Nombre : '',
    Cantidad : 0,
  
  };


  ngOnInit() {
  }

  onClickMe() {

    this.Service.postinventario(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

  
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Inventario Creado',
      type: 'success',
	  confirmButtonText: 'Ok'
	}).then((result) => {
		if (result.value) {
		  
		  this.router.navigate(['/inventariov']);
  
		}
  
    });
  }

  showMenssage3(){
	Swal.fire({
	  title: 'Error!',
	  text: 'campos erroneos o vacios',
	  type: 'error',
	  confirmButtonText: 'Entendido'
	});
  }
  
  showMenssage4(){
    Swal.fire({
      title: 'Advertencia',
      text: 'esta seguro de registrar los datos',
      type: 'warning',
      confirmButtonText: 'Entendido'
      }).then((result) => {
      if (result.value) {
        
        this.onClickMe();
    
      }
    
      
     });
    }



}
