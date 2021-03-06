import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {


  lista = '';
  listar:string[]=["Traslado entre almacenes","Recuento de inventario"];




  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {
  }

  onClickMe() {
  
    if(this.lista == 'Traslado entre almacenes'){
  
      this.router.navigate(['/traslado']);
      
    }

    if(this.lista == 'Recuento de inventario'){
  
      this.router.navigate(['/recuentoinventario']);
      
    }
  
    if(this.lista == ''){
  
      this.showMenssagenull();
        
      }
    }

    showMenssagenull() {
      Swal.fire({
        title: 'Error',
        text: 'Seleccione transacción',
        type: 'warning',
        confirmButtonText: 'Entendido'
      });
    }

}
