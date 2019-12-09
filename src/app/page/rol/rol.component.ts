import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    private fb: FormBuilder
    ) { 
    
  }
  roles: Rol={
    idRolPersona: 0,
    RolPersona:'',
    Estado: 1,
    
  }; 


   //----Validaciones de campos
   rolForm: FormGroup;
   submitted = false;
 
   onSubmit() {
     this.submitted = true;
 
     // stop here if form is invalid
     if (this.rolForm.valid) {
        this.insertDatos();        
     } else if(this.rolForm.invalid) {
       this.showMenssagenull();
     }

    }
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

    //Validador--------------------
    this.rolForm = this.fb.group({
      Estado: ['', Validators.required],
      RolPersona: ['', [Validators.required,Validators.pattern('^[a-zA-Zñáéíóú]*$')]],
});
    

  }

  //insertar Datos ------------------------------------------------
  insertDatos() {
    this.grabarStorage();
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
  grabarStorage(){
    let rol = this.roles;
    localStorage.setItem("roli",JSON.stringify(rol));
   }
  
    //mensajes de asigancion
    showMenssage() {
      Swal.fire({
        title: 'Creado',
        text: 'El rol ha sido creado',
        type: 'success',
        confirmButtonText: 'Entendido'
      }).then((res) => {
        if(res.value){
          console.log('confirmed');
          this.router.navigate(['/permisos']);
      }
      });
    }

      //mensajes de asigancion
  
  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'Error al guardar ',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}
