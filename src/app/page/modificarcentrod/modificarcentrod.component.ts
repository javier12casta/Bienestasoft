import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarcentrod',
  templateUrl: './modificarcentrod.component.html',
  styleUrls: ['./modificarcentrod.component.css']

})
export class ModificarcentrodComponent implements OnInit {

  onClickMe() {
    
    this.router.navigate(['/modificarcentroi']);
  
    }

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
