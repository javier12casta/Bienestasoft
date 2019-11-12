import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/interfaces/inventario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';


@Component({
  selector: 'app-inventariov',
  templateUrl: './inventariov.component.html',
  styleUrls: ['./inventariov.component.css']
})
export class InventariovComponent implements OnInit {

  public inv: Inventario[] = [];


  constructor(private Service: ServicioService, private router:Router) { }

  ngOnInit() {

    this.Service.getinventario()
    .subscribe(async (data) => {
      this.inv = data;
      console.log(data);
      console.log('funciona');
    }
    );

  }

}
