import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from '../..//interfaces/centrozonal';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-puntoentregai',
  templateUrl: './puntoentregai.component.html',
  styleUrls: ['./puntoentregai.component.css']
})
export class PuntoentregaiComponent implements OnInit {

  centros: Centrozonal[] = [];

  puntos: Puntoentrega = {
    NombrePE: '',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoPE: '',
    idCentrosZonales: 0,
    BarrioPE: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  //----Validaciones de campos
  peForm: FormGroup;
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.peForm.valid) {
      this.insertDatos();
    } else {
    }

    // display form values on success
    console.log('Formulario', this.peForm.value);
  }


  modificar = false;

  ngOnInit() {
    // Traer centro Zonal
    this.Service.getCentro()
      .subscribe(res => {
        this.centros = res;
      }, err => {
        console.log(err);
      });

    console.log(this.puntos);

    //Validador--------------------
    this.peForm = this.fb.group({
      idCentrosZonales: ['', Validators.required],
      Estado: ['', Validators.required],
      NombrePE: ['', [Validators.required, Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
      CodigoExternoPE: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]],
      CodigoInternoPE: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9]*$')]],
      Responsable: ['', [Validators.required, Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
      Comuna: ['', [Validators.required, Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 á é í ó ú \-\_\´\¨\.\ #]*$')]],
      BarrioPE: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 á é í ó ú]*$')]],
      Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    });
  }

  onReset() {
    this.submitted = false;
    this.peForm.reset();
  }

  get f() { return this.peForm.controls; }

  //insertar Datos ------------------------------------------------
  insertDatos() {
    this.Service.postPunto(this.puntos).subscribe(res => {
      console.log(this.puntos);
      this.showMenssage();
    }, err => {
      console.log(err);
      this.showMenssage2();
    });

  }

  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Punto de entrega Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/puntoentregav']);

      }
    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error',
      text: 'Error al crear el punto de entrega',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

}
