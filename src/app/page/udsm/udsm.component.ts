import { Component, OnInit } from '@angular/core';
import { Uds } from '../../interfaces/uds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonalt } from 'src/app/interfaces/centrozonalt';
import { Puntoentregat } from 'src/app/interfaces/puntoentregat';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';

@Component({
  selector: 'app-udsm',
  templateUrl: './udsm.component.html',
  styleUrls: ['./udsm.component.css']
})
export class UdsmComponent implements OnInit {

  centros: Centrozonalt[] = [];
  cz: Centrozonal[] = [];
  puntos: Puntoentregat[] = [];
  pe: Puntoentrega[] = [];

  unidad: Uds = {
    idUDS: 0,
    NombreUDS: '',
    CodigoInternoUDS: '',
    Direccion: '',
    ReponsableUDS: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoUDS: '',
    idPuntoEntrega: 0,
    idCentrosZonales: 0,
    Barrio: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder

  ) { }

  //----Validaciones de campos
  udForm: FormGroup;
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.udForm.valid) {
      this.updateDatos();
    } else {
    }

    // display form values on success
    console.log('Formulario', this.udForm.value);
  }



  modificar = false;
  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUdsid(params.id)
        .subscribe(res => {
          console.log(res);
          this.unidad = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getPuntoEstado()
      .subscribe(res => {
        this.pe = res;
      }, err => {
        console.log(err);
      });

    this.Service.getCentroEStado()
      .subscribe(res => {
        this.cz = res;
        console.log('Centros activos', this.cz);
      }, err => {
        console.log(err);
      });

    //Traer Centros zonales
    this.Service.getCentroTabla()
      .subscribe(res => {
        this.centros = res;
      }, err => {
        console.log(err);
      });
    //Traer puntos de entrega
    this.Service.getPuntoTabla()
      .subscribe(res => {
        this.puntos = res;
      }, err => {
        console.log(err);
      });

    //Validador--------------------
    this.udForm = this.fb.group({
      idCentrosZonales: ['', Validators.required],
      idPuntoEntrega: ['', Validators.required],
      Estado: ['', Validators.required],
      NombreUDS: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      CodigoExternoUDS: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
      CodigoInternoUDS: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ 0-9]*$')]],
      ReponsableUDS: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Comuna: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      Barrio: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú]*$')]],
      Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    });

  }

  onReset() {
    this.submitted = false;
    this.udForm.reset();
  }

  get f() { return this.udForm.controls; }

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putUds(this.unidad.idUDS, this.unidad)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
          this.showMenssage2();
        }
      );
  }


  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Modificado',
      text: 'Uds modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/uds']);

      }

    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error',
      text: 'Error al modificar la Uds',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/uds']);

      }

    });
  }



}
