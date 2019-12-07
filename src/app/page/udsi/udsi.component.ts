import { Component, OnInit } from '@angular/core';
import { Uds } from '../../interfaces/uds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-udsi',
  templateUrl: './udsi.component.html',
  styleUrls: ['./udsi.component.css']
})
export class UdsiComponent implements OnInit {
  
  centros: Centrozonal []=[];
  puntos: Puntoentrega[]=[];

  unidad : Uds = {
    NombreUDS: '',
    CodigoInternoUDS: '',
    Direccion: '',
    ReponsableUDS: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoUDS: '',
    idPuntoEntrega : 0,
    idCentrosZonales : 0,
    Comuna: '',
    Barrio:'',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder
  ) { }

  //----Validaciones de campos
  udForm: FormGroup;
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.udForm.valid) {
      this.insertDatos();
    } else {
    }

    // display form values on success
    console.log('Formulario', this.udForm.value);
  }

  modificar = false;
 ngOnInit() {

  this.Service.getPunto()
	.subscribe(res => {
	  this.puntos = res;
	}, err => {
	  console.log(err);
  });
  
  this.Service.getCentro()
	.subscribe(res => {
	  this.centros = res;
	}, err => {
	  console.log(err);
  });
  
   //Validador--------------------
   this.udForm = this.fb.group({
    idCentrosZonales: ['', Validators.required],
    idPuntoEntrega: ['', Validators.required],
    Estado: ['', Validators.required],
    NombreUDS: ['', [Validators.required, Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
    CodigoExternoUDS: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
    CodigoInternoUDS: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9]*$')]],
    ReponsableUDS: ['', [Validators.required, Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
    Comuna: ['', [Validators.required, Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
    Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 á é í ó ú \-\_\´\¨\.\ #]*$')]],
    Barrio: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 á é í ó ú]*$')]],
    Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
  });

  }

  onReset() {
    this.submitted = false;
    this.udForm.reset();
  }

  get f() { return this.udForm.controls; }

    //insertar Datos ------------------------------------------------
    insertDatos() {
      this.Service.postUds(this.unidad).subscribe(res => {
        console.log(this.unidad);
        console.log(res);
        this.showMenssage();
      },
        err => {
          console.log(err);
          this.showMenssage2();
        });
  
    }

    
  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Uds creada',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/udsv']);
    
      }
    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error',
      text: 'Error al crear la Uds',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/udsv']);
    
      }
    });
  }



}
