import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-centrodistribucionci',
  templateUrl: './centrodistribucionci.component.html',
  styleUrls: ['./centrodistribucionci.component.css']


})
export class CentrodistribucionciComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  public cen: Centrozonal[] = [];

  x : Centrodistribucion = {
    
    NumeroExterno:'',
    Nombre : '',
    Responsable : '' ,
    Direccion : '',
    Barrio : '',
    Telefono : 0,
    Estado : 0,
    idUDS : null,
    idCentrosZonales : null,
    idPuntoEntrega : null,

  };

   //----Validaciones de campos
   czForm: FormGroup;
   submitted = false;

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.czForm.valid) {
    //  this.Validar();
      
        this.onClickMe();
      
    } else if(this.czForm.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.czForm.value);
  }


  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }



  onClickMe() {
 
    this.Service.postcentrodistribucion(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     
     },
     err => {
       console.log(err);
     });
    
   }

  constructor(private Service: ServicioService,private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    
      //Validador--------------------
      this.czForm = this.fb.group({
     
        NumeroExterno: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
        Nombre : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
        Responsable : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
        Direccion : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
        Barrio : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
        Telefono : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
        Estado : ['', Validators.required],
        idCentrosZonales : ['', Validators.required],
  
      });


    this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

  

   
  }

  onReset() {
    this.submitted = false;
    this.czForm.reset();
  }

  get f() { return this.czForm.controls; }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Centro Distribución Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/centrodistribucionc']);
    
      }
    });
}
}