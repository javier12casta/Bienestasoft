import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-referenciasbienestarina',
  templateUrl: './referenciasbienestarina.component.html',
  styleUrls: ['./referenciasbienestarina.component.css']



})
export class ReferenciasbienestarinaComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadmedidad:string[]=["Bolsa","Caja"];
  unidadsecundario:string[]=["g","ml"];
  Referencias: string [] = ["Granular","Liquida"];

  x : TipoBienestarina  = {
    
    TipoBienesterina : '',
    Codigo  : 0,
    Estado : 1,
    Referencia : '',
    UnidadPrincipal : '',
    Cantidad : 0,
    UnidadSecundaria:  '',

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
  
  ngOnInit() {
    //Validador--------------------
    this.RefForm = this.fb.group({
      Estado: ['', Validators.required],
      TipoBienesterina: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú\(\)\.)]*$')]],
      Codigo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Referencia:['', Validators.required],
      unidad: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      unidadsecundario: ['', Validators.required],
    });

  }
  onReset() {
    this.submitted = false;
    this.RefForm.reset();
  }

  get f() { return this.RefForm.controls; }
  
  onClickMe() {
    this.Service.postTipobienestarina(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

  }

  Referencia(){
    if(this.x.Referencia == "Granular"){
      this.x.UnidadPrincipal = "Bolsa";
      this.x.UnidadSecundaria = "g";
    }else if(this.x.Referencia == "Liquida"){
      this.x.UnidadPrincipal = "Caja";
      this.x.UnidadSecundaria = "ml";
    }
  }

  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato maestro creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/referenciasbienestarinav']);
        
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
