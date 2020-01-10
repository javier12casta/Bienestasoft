import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Numerocupos } from '../../interfaces/numerocupos';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Uds } from 'src/app/interfaces/uds';

@Component({
  selector: 'app-modificarnumerocuposui',
  templateUrl: './modificarnumerocuposui.component.html',
  styleUrls: ['./modificarnumerocuposui.component.css']
})
export class ModificarnumerocuposuiComponent implements OnInit {

  public cen1: Uds[] = [];
  
  listamaestro:string[]=["0","1"];
  unidadm:string[]=["personas"];

constructor(
  private activeRoute: ActivatedRoute,
  private Service: ServicioService,
  private router:Router,
  private fb: FormBuilder) { }

  
  dvarios: Numerocupos = {

    idnumerocupos : 1,
    CodigoInterno : 0,
    EstadoDatoMaestro : 0,
    DescripcionDelRegistro : '',
    Valor : 0,
    UnidadDeMedida : '',   
    idUDS : 0,

    };

   //----Validaciones de campos
RefForm: FormGroup;
submitted = false;

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.RefForm.valid) {
    
      this.updateDatos();
        
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
    idUDS: ['', Validators.required]
    
  });

  const params = this.activeRoute.snapshot.params;
  console.log(params);
  if (params.id) {
    this.Service.getnumerocuposid(params.id)
      .subscribe(res => {
        console.log(res);
        this.dvarios = Object(res);
      }, err => {
        console.log(err);
      }
      );
  }

  this.Service.getUds()
.subscribe(res => {
  this.cen1 = res;
}, err => {
  console.log(err);
});

}

updateDatos() {
  this.Service.putnumerocupos(this.dvarios.idnumerocupos, this.dvarios)
    .subscribe(
      res => {
        console.log(res);
        this.showMenssage();
      }, err => {
        console.log(err);
      }
    );
}

showMenssage(){
  Swal.fire({
    title: 'Modificado!',
    text: 'Dato Maestro Modificado',
    type: 'success',
    confirmButtonText: 'Ok'
  }).then((result) => {
    if (result.value) {
      this.router.navigate(['/modificarnumerocuposu']);
    

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
