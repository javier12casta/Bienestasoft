import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { MaestroBienestarina } from '../../interfaces/maestrosBienestarina';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarserviciomm',
  templateUrl: './modificarserviciomm.component.html',
  styleUrls: ['./modificarserviciomm.component.css']
})
export class ModificarserviciommComponent implements OnInit {

  public maestrosm: MaestroBienestarina[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router:Router,
    private fb: FormBuilder,) { }

      //----Validaciones de campos
  servicioForm: FormGroup;
  submitted = false;




    maes: MaestroBienestarina = {

      idListasMaestro: 1,
      EstadoDatoMaestro : 0,
      Modalidad : '',
      Servicio : 0,
      idConsecutivosMaestro : 0,
  
      };
  

      onSubmit() {
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.servicioForm.valid) {
          this.Validar();
          if(this.campo1 == false && this.campo2 == false){
            this.updateDatos();
          }      
        } else if (this.servicioForm.invalid) {
          this.showMenssagenull();
        }
      }

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getMaestrosBienestrinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.maes = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

    //Validador--------------------
    this.servicioForm = this.fb.group({
      EstadoDatoMaestro: ['', Validators.required],
      Modalidad: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú\(\)\.)]*$')]],
      Servicio: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],});
  }
  onReset() {
    this.submitted = false;
    this.servicioForm.reset();
  }

  get f() { return this.servicioForm.controls; }

  updateDatos() {
    this.Service.putMaestrosBienestrina(this.maes.idListasMaestro, this.maes)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }

   //-------------------Validar si exiten los datos----------------------
   campo1 = false;
   campo2 = false;
   campo3 = false;
   Validar() {
     console.log('nombre ingresado', this.maes.Modalidad);
     var contador = 0;
     var contador2 = 0;
     var contador3 = 0;
     var contador4 = 0;

     for (let d of this.maestrosm) {
       if (d.Modalidad == this.maes.Modalidad) {
         contador = contador2 + 1;
         console.log('Modalidad', contador);
       }
 
       if (d.Servicio == this.maes.Servicio) {
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

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Dato maestro modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarserviciom']);
        
      }
    });
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

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos inválidos',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}
