import { Component, OnInit } from '@angular/core';
import { Datosvarios } from 'src/app/interfaces/datosvarios';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Uds } from 'src/app/interfaces/uds';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datosvariosui',
  templateUrl: './datosvariosui.component.html',
  styleUrls: ['./datosvariosui.component.css']
})
export class DatosvariosuiComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadm:string[]=["g"];
  public cen1: Uds[] = [];
  
  x : Datosvarios = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 1,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',
    idUDS : 0,

  };

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/datosvariosu']);
    
      }
    });
  }

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

  ngOnInit() {

    //Validador--------------------
    this.RefForm = this.fb.group({
      Estado: ['', Validators.required],
      Codigo:  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Valor: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      unidad: ['', Validators.required],
      udss: ['', Validators.required]
      
    });


    this.Service.getUds()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  }
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

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos inválidos',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }



}
