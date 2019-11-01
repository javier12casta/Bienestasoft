import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificaralmacen',
  templateUrl: './modificaralmacen.component.html',
  styleUrls: ['./modificaralmacen.component.css']
})
export class ModificaralmacenComponent implements OnInit {

  onClickMe() {
    
    this.router.navigate(['/modificaralmaceni']);
  
    }

  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
