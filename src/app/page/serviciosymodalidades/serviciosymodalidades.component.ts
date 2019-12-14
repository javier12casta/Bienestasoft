import { Component, OnInit } from '@angular/core';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-serviciosymodalidades',
  templateUrl: './serviciosymodalidades.component.html',
  styleUrls: ['./serviciosymodalidades.component.css']
})
export class ServiciosymodalidadesComponent implements OnInit {
  ser: MaestroBienestarina [] = [];

  x: MaestroBienestarina = {

    EstadoDatoMaestro: 1,
    Modalidad: "",
    Servicio: null,


  };

  constructor(
    private Service: ServicioService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  //----Validaciones de campos
  servicioForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.servicioForm.valid) {
      this.Validar();
      if(this.campo1 == false && this.campo2 == false){
        this.onClickMe();
      }      
    } else if (this.servicioForm.invalid) {
      this.showMenssagenull();
    }
  }

  ngOnInit() {
    //Validador--------------------
    this.servicioForm = this.fb.group({
      EstadoDatoMaestro: ['', Validators.required],
      Modalidad: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú\(\)\.)]*$')]],
      Servicio: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

    //------------
    this.Service.getMaestrosBienestrina().subscribe(res => {
      this.ser = res;
      console.log('Modalidad', this.ser );
    },err => {
      console.log(err);
    });
  }

  onReset() {
    this.submitted = false;
    this.servicioForm.reset();
  }

  get f() { return this.servicioForm.controls; }

  onClickMe() {
    this.Service.postMaestrosBienestrina(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
    },
      err => {
        console.log(err);
      });
  }


   //-------------------Validar si exiten los datos----------------------
   campo1 = false;
   campo2 = false;
   campo3 = false;
   Validar() {
     console.log('nombre ingresado', this.x.Modalidad);
     var contador = 0;
     var contador2 = 0;
     var contador3 = 0;
     var contador4 = 0;

     for (let d of this.ser) {
       if (d.Modalidad == this.x.Modalidad) {
         contador = contador2 + 1;
         console.log('Modalidad', contador);
       }
 
       if (d.Servicio == this.x.Servicio) {
         contador3 = contador4 + 1;
 
         console.log('Servicio', contador3);
       }
 
     }
     if (contador >= 1) {
       this.campo1 = true;
       this.showMenssage3();
     } else {
       this.campo1 = false;
     }
 
     if (contador3 >= 1) {
       this.campo2 = true;
       this.showMenssage4();
     }else{
       this.campo2 = false;
     }

 
   }

   showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'El nombre de la modalidad ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error',
      text: 'El código servicio y modalidad ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }


  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/serviciosymodalidadesv']);
      }
    });
  }


  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos inválidos',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}


