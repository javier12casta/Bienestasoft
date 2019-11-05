import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificarusuarios',
  templateUrl: './modificarusuarios.component.html',
  styleUrls: ['./modificarusuarios.component.css']


})
export class ModificarusuariosComponent implements OnInit {


  onClickMe() {
    
  this.router.navigate(['/modificarusuarios1']);

  }
  constructor(private Service:ServicioService , private router:Router) { }

  ngOnInit() {
  }

}
