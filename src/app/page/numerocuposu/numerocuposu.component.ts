import { Component, OnInit } from '@angular/core';
import { Numerocupos } from 'src/app/interfaces/numerocupos'
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-numerocuposu',
  templateUrl: './numerocuposu.component.html',
  styleUrls: ['./numerocuposu.component.css']
})
export class NumerocuposuComponent implements OnInit {

  servic: Numerocupos[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();


  constructor(private Service: ServicioService , private router:Router) { }

  ngOnInit() {

    this.Service.getnumerocuposu()
    .subscribe(async (data) => {
      this.servic = data;
      console.log(data);
      console.log('funciona');
    }
    );


  }

}
