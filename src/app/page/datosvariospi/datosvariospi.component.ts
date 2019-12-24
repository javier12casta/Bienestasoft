import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datosvariospi',
  templateUrl: './datosvariospi.component.html',
  styleUrls: ['./datosvariospi.component.css']
})
export class DatosvariospiComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadm:string[]=["g","personas"];
  public cen1: Puntoentrega[] = [];
  
  x : Datosvarios = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 0,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',
    idPuntoEntrega : 0,

  };

  

  onClickMe() {
    
    this.Service.postdatosvarios(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     },
     err => {
       console.log(err);
     });
    
   }

  constructor(
    private Service: ServicioService,
    private router:Router,
    private fb: FormBuilder) { }

  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RefForm.valid) {
      
        this.onClickMe();
          
    } else if (this.RefForm.invalid) {
      this.showMenssagenull();
    }
  }
  
  onReset() {
    this.submitted = false;
    this.RefForm.reset();
  }

  get f() { return this.RefForm.controls; }  

  ngOnInit() {

    this.Service.getPunto()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });
    //Validador--------------------
    this.RefForm = this.fb.group({
      Estado: ['', Validators.required],
      Codigo:  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Valor: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      unidad: ['', Validators.required],
      Pis: ['', Validators.required]
      
    });

    this.Service.getPunto()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
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
  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato maestro creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/datosvariosp']);
    
      }
    });
  }


}
