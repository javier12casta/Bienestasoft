import { Component, OnInit } from '@angular/core';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from '../..//interfaces/centrozonal';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-puntoentregam',
  templateUrl: './puntoentregam.component.html',
  styleUrls: ['./puntoentregam.component.css']
})
export class PuntoentregamComponent implements OnInit {

  centros: Centrozonal[] = [];
  cz: Centrozonal[] = [];
  pe: Puntoentrega[] = [];
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
      this.Validar();
      if (this.campo1 == false && this.campo2 == false && this.campo3 == false) {
        this.updateDatos();
      }
    } else {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.peForm.value);
  }


  modificar = false;

  async ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      await this.Service.getPuntoid(params.id)
        .subscribe(res => {
          console.log(res);
          this.puntos = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
    // Traer centro Zonal
    await this.Service.getCentro()
      .subscribe(res => {
        this.centros = res;
      }, err => {
        console.log(err);
      });

    console.log(this.puntos);

    this.Service.getCentroEStado()
      .subscribe(res => {
        this.cz = res;
        console.log('Centros activos', this.cz);
      }, err => {
        console.log(err);
      });

    this.Service.getPunto()
      .subscribe(res => {
        this.pe = res;
      }, err => {
        console.log(err);
      });

    //Validador--------------------
    this.peForm = this.fb.group({
      idCentrosZonales: ['', Validators.required],
      Estado: ['', Validators.required],
      NombrePE: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      CodigoExternoPE: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
      CodigoInternoPE: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ 0-9]*$')]],
      Responsable: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Comuna: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      BarrioPE: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú]*$')]],
      Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    });
  }

  onReset() {
    this.submitted = false;
    this.peForm.reset();
  }

  get f() { return this.peForm.controls; }

  //------------------Validar si exiten los datos-----------------------
  campo1 = false;
  campo2 = false;
  campo3 = false;
  Validar() {
    console.log('nombre ingresado', this.puntos.NombrePE);
    var contador = 0;
    var contador2 = 0;
    var contador3 = 0;
    var contador4 = 0;
    var contador5 = 0;
    var contador6 = 0;
    for (let d of this.pe) {

      if (d.idPuntoEntrega !== this.puntos.idPuntoEntrega) {
        if (d.NombrePE == this.puntos.NombrePE) {
          contador = contador2 + 1;
          console.log('Nombre igual', contador);
        }

        if (d.CodigoExternoPE == this.puntos.CodigoExternoPE) {
          contador3 = contador4 + 1;

          console.log('Codico ExPE igual', contador3);
        }

        if (d.CodigoInternoPE == this.puntos.CodigoInternoPE) {
          contador5 = contador6 + 1;
          this.campo3 = true;
          console.log('Codico InPE igual', contador5);
        }
      }
    }
    if (contador >= 1) {
      this.campo1 = true;
      this.showMenssage3();
    } else {
      this.campo1 = false;
    }

    if (contador3 >= 1) {
      this.campo2 = true;
      this.showMenssage4();
    } else {
      this.campo2 = false;
    }

    if (contador5 >= 1) {
      this.campo3 = true;
      this.showMenssage5();
    } else {
      this.campo3 = false;
    }

  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putPunto(this.puntos.idPuntoEntrega, this.puntos)
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
      text: 'Punto de entrega modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/puntoentrega']);
      }
    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error',
      text: 'Error al modificar el punto de entrega',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/puntoentrega']);

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

  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'El nombre del punto de entrega ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error',
      text: 'El código externo del punto de entre ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage5() {
    Swal.fire({
      title: 'Error',
      text: 'El código interno del punto de entrega ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
}



