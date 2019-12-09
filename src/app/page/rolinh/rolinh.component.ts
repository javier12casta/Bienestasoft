import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import Swal from 'sweetalert2';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-rolinh',
  templateUrl: './rolinh.component.html',
  styleUrls: ['./rolinh.component.css']
})
export class RolinhComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router:Router,
    ) { 
    
  }
  usua: Usuarios[] = [];
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

        this.Service.getUsuarios()
        .subscribe(async (data) => {
          this.usua = data;
          console.log(data);
        }
        );
    }

    

  }

  updateDatos(){
    const params = this.activeRoute.snapshot.params;
    var numero = params.id;
    var cont2: number = 0;
    var cont3: number = 0;
    for (let numeros of this.usua) {
      if (numero == numeros.TipoUsuario && numeros.Estado == 1) {
        var cont: number = 0;
        var cont2 = cont + 1;
        //this.showMenssage3();
      } else if(numero == numeros.TipoUsuario && numeros.Estado == 0) {
        var cont: number = 0;
        cont3 = cont + 1;
      }
    }
    if (cont2 == 0 && cont3 >0){
      //console.log('funciona');
      this.updateDatos2();
    }else{
      //mensaje de no se puede inhabilitar
      this.showMenssage4();
    }   
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error',
      text: 'No es posible inhabilitar el rol',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }
  // Actualizar Datos---------------------------------------------
  updateDatos2() {
    this.Service.ActualizarRol(this.roles.idRolPersona, this.roles)
      .subscribe(
        res => {
          console.log(res);
          if (this.roles.Estado == 1){
            this.showMenssage();
          }else if(this.roles.Estado == 0){
            this.showMenssage5();
          }
        }, err => {
          console.log(err);
        }
      );
  }

  showMenssage() {
    Swal.fire({
      title: 'Habilitado',
      text: 'El rol ha  sido habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((res) => {
      if(res.value){
        console.log('confirmed');
        this.router.navigate(['/centrozonal']);
    }
    });
  }

      //mensajes de asigancion
  showMenssage2() {
    Swal.fire({
      title: 'Actualizado',
      text: 'El rol ha sido actualizado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((res) => {
      if(res.value){
        console.log('confirmed');
        this.router.navigate(['/rolin']);
    }
    });
  }
  
  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'Error al guardar ',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }
  showMenssage5() {
    Swal.fire({
      title: 'Inhabilitado',
      text: 'se ha inhabilitado el' + this.roles.RolPersona,
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((res) => {
      if(res.value){
        console.log('confirmed');
        this.router.navigate(['/centrozonal']);
    }
    });
  }


}
