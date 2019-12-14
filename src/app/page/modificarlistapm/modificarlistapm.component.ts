import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Lprecios } from '../../interfaces/listaprecios';
import { TipoBienestarina } from 'src/app/interfaces/tipobienestarina';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarlistapm',
  templateUrl: './modificarlistapm.component.html',
  styleUrls: ['./modificarlistapm.component.css']
})
export class ModificarlistapmComponent implements OnInit {

  public precio: Lprecios[] = [];
  referencia: TipoBienestarina[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router:Router,
    private fb: FormBuilder) { }

    pre: Lprecios = {

    idListaPrecios : 1,
    Referencia : '',
    Mes : '',
    Ano : 0,
    ValorCop :0,
    Estado : 0,
    Codigo : 0,
  
      };
    
  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;

  fe = new Date();
  fecha =  this.fe.getFullYear();

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
      Codigo: ['', Validators.required],
      Referencia:  ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Mes: ['', Validators.required],
      Ano: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      ValorCop: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });


    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getListapreciosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.pre = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getTipobienestarina().subscribe(res => {
      this.referencia = Object(res);
      console.log(this.referencia);
    }, err =>{
      console.log(err);
    });  

  }

  updateDatos() {
    this.Service.putListaprecios(this.pre.idListaPrecios, this.pre)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }

  onFilterChange(){
    for (let re of this.referencia) 
    {
      if(re.Codigo == this.pre.Codigo){
        this.pre.Referencia = re.Referencia
      }
      
    }

  //  console.log(i);
 // }
  } 

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Dato Maestro Modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarlistac']);
        window.location.reload();
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