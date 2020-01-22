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
  ud: Uds [] = [];

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
      if(this.campo1 == false && this.campo2 == false && this.campo3 == false){
        this.updateDatos();
      }
    }  else if(this.udForm.invalid) {
      this.showMenssagenull();
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
      CodigoExternoUDS: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
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

  //-------------------Validar si exiten los datos----------------------
  campo1 = false;
  campo2 = false;
  campo3 = false;
  Validar() {
    console.log('nombre ingresado', this.unidad.NombreUDS);
    var contador = 0;
    var contador2 = 0;
    var contador3 = 0;
    var contador4 = 0;
    var contador5 = 0;
    var contador6 = 0;
    for (let d of this.ud) {
      if (d.NombreUDS == this.unidad.NombreUDS) {
        contador = contador2 + 1;
        console.log('Nombre igual', contador);
      }

      if (d.CodigoExternoUDS == this.unidad.CodigoExternoUDS) {
        contador3 = contador4 + 1;

        console.log('Codico CZ igual', contador3);
      }

      if (d.CodigoInternoUDS == this.unidad.CodigoInternoUDS) {
        contador5 = contador6 + 1;
        this.campo3 = true;
        console.log('Codico interno igual', contador5);
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

  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'El nombre de la unidad de servicio ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error',
      text: 'El código externo ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage5() {
    Swal.fire({
      title: 'Error',
      text: 'El código interno ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
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
