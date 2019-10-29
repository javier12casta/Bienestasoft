import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

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
    Transacciones: '',
    Almacenes: '',
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

  //insertar Datos ------------------------------------------------
  insertDatos() {
    delete this.roles.idRolPersona;
    this.Service.insertarRol(this.roles).subscribe(res => {
      //console.log(this.roles);
     // console.log(res);
     this.showMenssage();
    },
      err => {
        console.log(err);
      });

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
    showMenssage() {
      Swal.fire({
        title: 'Creado!',
        text: 'El rol a sido creado',
        type: 'success',
        confirmButtonText: 'Entendido'
      }).then((res) => {
        if(res.value){
          console.log('confirmed');
          this.router.navigate(['/roli']);
      }
      });
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
