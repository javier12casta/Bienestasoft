import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Almacen } from '../../interfaces/almacen';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Uds } from 'src/app/interfaces/uds';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificaralmacenui',
  templateUrl: './modificaralmacenui.component.html',
  styleUrls: ['./modificaralmacenui.component.css']
})
export class ModificaralmacenuiComponent implements OnInit {

  
  public almc: Almacen[] = [];
  public cen: Uds[] = [];
  public centrod: Centrodistribucion[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router,
    private fb: FormBuilder) { }

    almac: Almacen = {
      idAlmacenes: 1,
      NumeroExterno : '',
      Nombre: '',
      Responsable: '',
      Capacidad: 0,
      Capacidad2: 0,
      UnidadMedida: '',
      Estado: 0,
      idCentroDistribucion: 1,

      };

      czForm: FormGroup;
      submitted = false;
    
      onSubmit() {
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.czForm.valid) {
          
            this.updateDatos();
         
           
        } else if(this.czForm.invalid) {
          this.showMenssagenull();
        }
    
        // display form values on success
        console.log('Formulario', this.czForm.value);
      }

  ngOnInit() {

    this.czForm = this.fb.group({
     
 
      NumeroExterno :['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]], 
      Nombre: ['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Responsable : ['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Capacidad  : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Capacidad2  : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
     
      Estado  :  ['', Validators.required],
      idCentroDistribucion : ['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
      idCentrosZonales  :['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
   

    });
    

    this.Service.getUds()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    this.Service.getcentrodistribucion()
    .subscribe(res => {
      this.centrod = res;
    }, err => {
      console.log(err);
    });

    
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getalmacenid(params.id)
        .subscribe(res => {
          this.almac = Object(res);
          console.log(this.almac);
        }, err => {
          console.log(err);
        }
        );
    }


  }

  onReset() {
    this.submitted = false;
    this.czForm.reset();
  }

  get f() { return this.czForm.controls; }


  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Almacen modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificaralmacenu']);
    
      }
    });
  }

  updateDatos() {
    this.Service.putalmacen(this.almac.idAlmacenes, this.almac)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
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
