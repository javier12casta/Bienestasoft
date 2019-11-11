import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolm',
  templateUrl: './rolm.component.html',
  styleUrls: ['./rolm.component.css']
})
export class RolmComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router:Router,
    ) { 
    
  }
  roles: Rol={
    idRolPersona: 0,
    RolPersona:'',
    Estado: 1,
    
  }; 
  modificar = false;

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getRolid(params.id)
        .subscribe(res => {
          console.log(res);
          this.roles = Object(res);
          this.modificar = true;
          console.log(this.roles);
        }, err => {
          console.log(err);
        }
        );
    }

    

  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.ActualizarRol(this.roles.idRolPersona, this.roles)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage2();
        }, err => {
          console.log(err);
        }
      );
  }

      //mensajes de asigancion
  showMenssage2() {
    Swal.fire({
      title: 'Actualizado!',
      text: 'El rol a sido actualizado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((res) => {
      if(res.value){
        console.log('confirmed');
        this.router.navigate(['/roli']);
    }
    });
  }
  
  showMenssage3() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al guardar ',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

}
