import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/interfaces/almacen';
import { Centrodistribucion } from 'src/app/interfaces/centrodistribucion';
import { ServicioService } from 'src/app/servicio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Inventario } from 'src/app/interfaces/inventario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-almacenpi',
  templateUrl: './almacenpi.component.html',
  styleUrls: ['./almacenpi.component.css']
})
export class AlmacenpiComponent implements OnInit {

  listamaestro:string[]=["0","1"];
  unidadmedida:string[]=["g","ml", "g y ml"];
  public cen: Centrodistribucion[] = [];
  public cen1: Puntoentrega[] = [];
  public inv1: Inventario[] = [];
  public inv2: Inventario[] = [];
  campo: [];
  inv;
  habilitar = true;


  x : Almacen = {
    
    NumeroExterno : '',
    Nombre: '',
    Responsable : '',
    Capacidad  : 0,
    Capacidad2  : 0,
    Estado  : 1,
    idCentroDistribucion : 1,

    
  };

  y : Inventario = {
    
    
    Nombre : '',
    Cantidad : 0,
    Cantidad2 : 0,
    unidad: '',

    
  };


  onClickMe() {
 
 
      this.y.Nombre = this.x.Nombre;
      this.y.unidad = this.x.UnidadMedida;
      
    
          this.Service.postinventario(this.y).subscribe(res => {
            console.log(this.y);
       
            },
            err => {
              console.log(err);
            });
  
    this.Service.postalmacen(this.x).subscribe(res => {
     console.log(this.x);
     this.showMenssage();
     
     },
     err => {
       console.log(err);
     });
    
   }

   habilitado = true;
   habilitado1 = false;

   onChange($event) {
    
    if(this.x.UnidadMedida == "g y ml"){
      this.habilitado = false;
      this.habilitado1 = false;
   console.log(this.habilitado);
    }else if (this.x.UnidadMedida == "g") {
      this.habilitado = true;
      this.habilitado1 = false;
    }else if (this.x.UnidadMedida == "ml") {
      this.habilitado = false;
      this.habilitado1 = true;
    }  
  }

  constructor(private Service: ServicioService,private router:Router,
    private fb: FormBuilder) { }

    
    czForm: FormGroup;
    czForm1: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.czForm.valid) {
      
        this.onClickMe();
      
    } else if(this.czForm.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.czForm.value);
  }


  ngOnInit() {

    this.czForm = this.fb.group({
      NumeroExterno: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
      Nombre: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Responsable: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Capacidad: ['', [ Validators.pattern('^[0-9]*$')]],
      Capacidad2: ['', [ Validators.pattern('^[0-9]*$')]],
      Estado: ['', Validators.required],
      idCentroDistribucion: ['', Validators.required],
      idPuntoEntrega: ['', Validators.required],

    });

     this.czForm1 = this.fb.group({
      
      Nombre : ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
     
    });

    this.Service.getCentrodistribucionxpunto()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    
  this.Service.getPunto()
  .subscribe(res => {
    this.cen1 = res;
  }, err => {
    console.log(err);
  });

  this.Service.getinventario()
  .subscribe(res => {
    this.inv2 = res;
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
      text: 'Almacen creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/almacenp']);
    
      }
    });

}


  
  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos vacios',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

}
