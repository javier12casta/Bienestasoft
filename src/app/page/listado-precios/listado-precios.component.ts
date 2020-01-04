import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import { Lprecios } from 'src/app/interfaces/listaprecios';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {

  listamaestro: string[] = ["0", "1"];
  año: string[] = [];
  referencia: TipoBienestarina[] = [];
  cb;
  cb1 ;
  x: Lprecios = {


    Referencia: '',
    Mes: '',
    Ano: null,
    ValorCop: null,
    Estado: 1,
    Codigo: null,

  };

  constructor(
    private Service: ServicioService,
    private router:Router,
    private fb: FormBuilder) { }

  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;
  
  
  fe = new Date();
  fecha =  this.fe.getFullYear();
 
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

  onClickMe() {

    this.Service.postListaprecios(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

  }

  
 


  onFilterChange(){
    for (let re of this.referencia) 
    {
      if(re.Codigo == this.x.Codigo){
        this.x.Referencia = re.Referencia
      }
      
    }

  //  console.log(i);
 // }
  } 
  ngOnInit() {

    //Validador--------------------
    this.RefForm = this.fb.group({
      Estado: ['', Validators.required],
      Codigo: ['', Validators.required],
      Referencia:  ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Mes: ['', Validators.required],
      Ano:  ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]*$')]],
      ValorCop: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

  this.Service.getTipobienestarina().subscribe(res => {
    this.referencia = Object(res);
    console.log(this.referencia);
  }, err =>{
    console.log(err);
  });                      

  }


  showMenssage(){
    Swal.fire({
      title: 'Creado',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/listapreciosv']);
       
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
