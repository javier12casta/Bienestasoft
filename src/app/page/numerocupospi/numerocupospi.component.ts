import { Component, OnInit } from '@angular/core';
import { Numerocupos } from 'src/app/interfaces/numerocupos';
import { ServicioService } from 'src/app/servicio.service';
import { Puntoentrega} from 'src/app/interfaces/puntoentrega';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-numerocupospi',
  templateUrl: './numerocupospi.component.html',
  styleUrls: ['./numerocupospi.component.css']
})
export class NumerocupospiComponent implements OnInit {

  
  listamaestro:string[]=["0","1"];
  unidadm:string[]=["personas"];
  public cen1: Puntoentrega[] = [];
  
  x : Numerocupos = {
    
    CodigoInterno : 0,
    EstadoDatoMaestro : 1,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',
    idPuntoEntrega : 0,

  };

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

    //Validador--------------------
    this.RefForm = this.fb.group({
      Estado: ['', Validators.required],
      Codigo:  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Valor: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      unidad: ['', Validators.required],
      Czs: ['', Validators.required]
      
    });

    this.Service.getPunto()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  }

  onClickMe() {
    
    this.Service.postnumerocupos(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     },
     err => {
       console.log(err);
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
        
        this.router.navigate(['/numerocuposp']);
    
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
