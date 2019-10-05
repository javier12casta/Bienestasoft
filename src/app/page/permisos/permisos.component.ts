import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

 // marked = false;
  theCheckbox = false;
  Crear = false;
  vizualizar = false;
  Actualizar= false;
  Reportes= false;
  Inhabilitar= false;


  constructor(
  ) {
    
   }

  ngOnInit() {
  }

  /*toggleVisibility(e){
    this.marked= e.target.checked;
  }*/
  

}
